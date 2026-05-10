/**
 * To-Do List Application
 * A modular, interactive task management application with local storage persistence
 */

// ============================================================================
// Constants and Configuration
// ============================================================================

const STORAGE_KEY = 'todoList';
const MIN_TASK_LENGTH = 1;
const MAX_TASK_LENGTH = 200;
const ERROR_DISPLAY_DURATION = 3000;

// ============================================================================
// DOM Elements Cache
// ============================================================================

const elements = {
    taskForm: document.getElementById('taskForm'),
    taskInput: document.getElementById('taskInput'),
    taskList: document.getElementById('taskList'),
    emptyState: document.getElementById('emptyState'),
    errorMessage: document.getElementById('errorMessage'),
    taskCount: document.getElementById('taskCount')
};

// ============================================================================
// State Management
// ============================================================================

let tasks = [];

/**
 * Initialize the application
 */
function init() {
    try {
        loadTasksFromStorage();
        renderTasks();
        attachEventListeners();
    } catch (error) {
        handleError('Failed to initialize application', error);
    }
}

// ============================================================================
// Local Storage Operations
// ============================================================================

/**
 * Load tasks from local storage
 */
function loadTasksFromStorage() {
    try {
        const storedTasks = localStorage.getItem(STORAGE_KEY);
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
        }
    } catch (error) {
        handleError('Failed to load tasks from storage', error);
        tasks = [];
    }
}

/**
 * Save tasks to local storage
 */
function saveTasksToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        handleError('Failed to save tasks to storage', error);
    }
}

// ============================================================================
// Task Operations
// ============================================================================

/**
 * Add a new task
 * @param {string} taskText - The text content of the task
 */
function addTask(taskText) {
    const task = {
        id: generateUniqueId(),
        text: taskText.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.unshift(task);
    saveTasksToStorage();
    renderTasks();
    elements.taskInput.value = '';
    elements.taskInput.focus();
}

/**
 * Delete a task by ID
 * @param {string} taskId - The unique identifier of the task
 */
function deleteTask(taskId) {
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    
    if (taskElement) {
        taskElement.classList.add('removing');
        
        setTimeout(() => {
            tasks = tasks.filter(task => task.id !== taskId);
            saveTasksToStorage();
            renderTasks();
        }, 300);
    }
}

/**
 * Toggle task completion status
 * @param {string} taskId - The unique identifier of the task
 */
function toggleTaskCompletion(taskId) {
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
        task.completed = !task.completed;
        saveTasksToStorage();
        renderTasks();
    }
}

/**
 * Update task text
 * @param {string} taskId - The unique identifier of the task
 * @param {string} newText - The new text content
 */
function updateTask(taskId, newText) {
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
        task.text = newText.trim();
        saveTasksToStorage();
        renderTasks();
    }
}

// ============================================================================
// Validation
// ============================================================================

/**
 * Validate task input
 * @param {string} taskText - The text to validate
 * @returns {Object} Validation result with isValid and error message
 */
function validateTaskInput(taskText) {
    const trimmedText = taskText.trim();

    if (trimmedText.length === 0) {
        return {
            isValid: false,
            error: 'Task cannot be empty. Please enter a task.'
        };
    }

    if (trimmedText.length < MIN_TASK_LENGTH) {
        return {
            isValid: false,
            error: `Task must be at least ${MIN_TASK_LENGTH} character long.`
        };
    }

    if (trimmedText.length > MAX_TASK_LENGTH) {
        return {
            isValid: false,
            error: `Task cannot exceed ${MAX_TASK_LENGTH} characters.`
        };
    }

    return { isValid: true };
}

// ============================================================================
// UI Rendering
// ============================================================================

/**
 * Render all tasks to the DOM
 */
function renderTasks() {
    elements.taskList.innerHTML = '';

    if (tasks.length === 0) {
        showEmptyState();
    } else {
        hideEmptyState();
        tasks.forEach(task => {
            const taskElement = createTaskElement(task);
            elements.taskList.appendChild(taskElement);
        });
    }

    updateTaskCount();
}

/**
 * Create a task DOM element
 * @param {Object} task - The task object
 * @returns {HTMLElement} The task list item element
 */
function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.setAttribute('data-task-id', task.id);

    li.innerHTML = `
        <div class="task-checkbox" role="checkbox" aria-checked="${task.completed}" tabindex="0"></div>
        <div class="task-content">
            <span class="task-text">${escapeHtml(task.text)}</span>
        </div>
        <div class="task-actions">
            <button class="btn-icon btn-edit" aria-label="Edit task" title="Edit">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.75 2.25L15.75 5.25M1.5 16.5L4.125 16.125L15.375 4.875C15.7728 4.47718 16 3.93782 16 3.375C16 2.81218 15.7728 2.27282 15.375 1.875C14.9772 1.47718 14.4378 1.25 13.875 1.25C13.3122 1.25 12.7728 1.47718 12.375 1.875L1.125 13.125L1.5 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="btn-icon btn-delete" aria-label="Delete task" title="Delete">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 4.5H15.75M14.25 4.5V15C14.25 15.75 13.5 16.5 12.75 16.5H5.25C4.5 16.5 3.75 15.75 3.75 15V4.5M6 4.5V3C6 2.25 6.75 1.5 7.5 1.5H10.5C11.25 1.5 12 2.25 12 3V4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    `;

    attachTaskEventListeners(li, task);
    return li;
}

/**
 * Attach event listeners to a task element
 * @param {HTMLElement} taskElement - The task list item element
 * @param {Object} task - The task object
 */
function attachTaskEventListeners(taskElement, task) {
    const checkbox = taskElement.querySelector('.task-checkbox');
    const editBtn = taskElement.querySelector('.btn-edit');
    const deleteBtn = taskElement.querySelector('.btn-delete');

    // Toggle completion
    checkbox.addEventListener('click', () => toggleTaskCompletion(task.id));
    checkbox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTaskCompletion(task.id);
        }
    });

    // Edit task
    editBtn.addEventListener('click', () => enableEditMode(taskElement, task));

    // Delete task
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
}

/**
 * Enable edit mode for a task
 * @param {HTMLElement} taskElement - The task list item element
 * @param {Object} task - The task object
 */
function enableEditMode(taskElement, task) {
    const taskContent = taskElement.querySelector('.task-content');
    const taskActions = taskElement.querySelector('.task-actions');

    const originalText = task.text;

    taskContent.innerHTML = `
        <input type="text" class="task-input-edit" value="${escapeHtml(task.text)}" aria-label="Edit task">
    `;

    taskActions.innerHTML = `
        <button class="btn-icon btn-save" aria-label="Save task" title="Save">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4.5L6.75 12.75L3 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button class="btn-icon btn-cancel" aria-label="Cancel edit" title="Cancel">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
    `;

    const editInput = taskContent.querySelector('.task-input-edit');
    const saveBtn = taskActions.querySelector('.btn-save');
    const cancelBtn = taskActions.querySelector('.btn-cancel');

    editInput.focus();
    editInput.select();

    // Save on button click
    saveBtn.addEventListener('click', () => {
        const newText = editInput.value.trim();
        const validation = validateTaskInput(newText);

        if (validation.isValid) {
            updateTask(task.id, newText);
        } else {
            showError(validation.error);
            editInput.focus();
        }
    });

    // Cancel edit
    cancelBtn.addEventListener('click', () => {
        renderTasks();
    });

    // Save on Enter key
    editInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveBtn.click();
        }
    });

    // Cancel on Escape key
    editInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cancelBtn.click();
        }
    });
}

/**
 * Update the task count display
 */
function updateTaskCount() {
    const count = tasks.length;
    const completedCount = tasks.filter(t => t.completed).length;
    elements.taskCount.textContent = `${count} ${count === 1 ? 'task' : 'tasks'}`;
}

/**
 * Show the empty state
 */
function showEmptyState() {
    elements.emptyState.classList.remove('hidden');
}

/**
 * Hide the empty state
 */
function hideEmptyState() {
    elements.emptyState.classList.add('hidden');
}

// ============================================================================
// Event Handlers
// ============================================================================

/**
 * Attach event listeners to the form
 */
function attachEventListeners() {
    elements.taskForm.addEventListener('submit', handleFormSubmit);
}

/**
 * Handle form submission
 * @param {Event} e - The submit event
 */
function handleFormSubmit(e) {
    e.preventDefault();

    const taskText = elements.taskInput.value;
    const validation = validateTaskInput(taskText);

    if (validation.isValid) {
        addTask(taskText);
        hideError();
    } else {
        showError(validation.error);
    }
}

// ============================================================================
// Error Handling
// ============================================================================

/**
 * Show an error message
 * @param {string} message - The error message to display
 */
function showError(message) {
    elements.errorMessage.textContent = message;
    elements.errorMessage.classList.add('show');

    setTimeout(() => {
        hideError();
    }, ERROR_DISPLAY_DURATION);
}

/**
 * Hide the error message
 */
function hideError() {
    elements.errorMessage.classList.remove('show');
}

/**
 * Handle application errors
 * @param {string} message - User-friendly error message
 * @param {Error} error - The error object
 */
function handleError(message, error) {
    console.error(`${message}:`, error);
    showError(message);
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Generate a unique ID for tasks
 * @returns {string} A unique identifier
 */
function generateUniqueId() {
    return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} text - The text to escape
 * @returns {string} The escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================================================
// Application Initialization
// ============================================================================

// Initialize the application when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
