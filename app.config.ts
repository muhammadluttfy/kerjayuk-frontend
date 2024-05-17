export default defineAppConfig({
  ui: {
    primary: 'red',
    gray: 'neutral',
    formGroup: {
      error: 'text-xs',
      label: {
        base: 'text-slate-800 dark:text-slate-400'
      },
      help: 'text-slate-500 dark:text-slate-400 text-xs',
      hint: 'text-slate-500 dark:text-slate-400 text-xs'
    },

    input: {
      padding: {
        sm: 'px-3.5 py-2.5',
        md: 'px-3.5 py-3',
        lg: 'px-5 py-4'
      },
      color: {
        white: {
          outline: 'bg-white dark:bg-slate-900 ring-slate-300 dark:ring-slate-700'
        }
      },
      rounded: 'rounded-lg',
      placeholder: 'placeholder-slate-400 dark:placeholder-slate-500',
      icon: {
        base: 'text-slate-400 dark:text-slate-500'
      }
    },

    checkbox: {
      label: 'text-slate-400 dark:text-slate-400',
      background: 'bg-white dark:bg-slate-900'
    },

    button: {
      padding: {
        sm: 'px-3.5 py-2.5',
        md: 'px-3.5 py-3',
        lg: 'px-5 py-4'
      },
      rounded: 'rounded-lg',
      color: {
        white: {
          solid: 'shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-600 text-slate-700 dark:text-slate-200 bg-slate-50 hover:bg-slate-100 disabled:bg-slate-50 dark:bg-slate-700 dark:hover:bg-slate-700/50 dark:disabled:bg-slate-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 py-3 px-6'
        },
        gray: {
          solid: 'shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 text-slate-700 dark:text-slate-200 bg-slate-200 hover:bg-slate-100 disabled:bg-slate-50 dark:bg-slate-700 dark:hover:bg-slate-700/50 dark:disabled:bg-slate-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 py-3 px-6'
        }
      }
    },

    divider: {
      border: {
        base: 'border-slate-200 dark:border-slate-600'
      }
    },

    card: {
      background: 'bg-white dark:bg-slate-800',
      ring: 'ring-1 ring-slate-200 dark:ring-slate-700'
    },

    popover: {
      background: 'bg-white dark:bg-slate-800',
      ring: 'ring-1 ring-slate-200 dark:ring-slate-700',
      overlay: {
        background: 'backdrop-blur-sm bg-slate-800/75 dark:bg-slate-900/75'
      }
    },

    slideover: {
      overlay: {
        background: 'bg-slate-900/75 dark:bg-slate-900/75'
      },
      background: 'bg-white dark:bg-slate-800'
    },

    modal: {
      overlay:
      {
        background: 'backdrop-blur-sm bg-slate-800/75 dark:bg-slate-900/75'
      },
      rounded: 'rounded-[20px]',
      width: 'max-w-xl'
    },

    notifications: {
      position: 'top-0 bottom-auto'
    },

    select: {
      padding: {
        sm: 'px-3.5 py-2.5'
      },
      color: {
        white: {
          outline: 'bg-white dark:bg-slate-900 ring-slate-300 dark:ring-slate-700'
        }
      },
      icon: {
        base: 'text-slate-400 dark:text-slate-500'
      }
    },

    selectMenu: {
      background: 'bg-white dark:bg-slate-800',
      input: 'bg-white dark:bg-slate-900'
    },

    textarea: {
      color: {
        white: {
          outline: 'bg-white dark:bg-slate-900 ring-slate-300 dark:ring-slate-700'
        }
      },
      placeholder: 'placeholder-slate-400 dark:placeholder-slate-500'
    },

    avatar: {
      background: 'bg-slate-200 dark:bg-slate-900'
    },

    badge: {
      color: {
        white: {
          solid: 'bg-white dark:bg-slate-900'
        }
      }
    },

    notification: {
      background: 'bg-white dark:bg-slate-700'
    },

    skeleton: {
      background: 'bg-slate-300 dark:bg-slate-700'
    },

    tabs: {
      list: {
        background: 'bg-slate-100 dark:bg-slate-900',
        marker: {
          background: 'bg-white dark:bg-slate-800'
        }
      }
    },

    dropdown: {
      background: 'bg-white dark:bg-slate-800',
      rounded: 'rounded-lg',
      icon: {
        base: 'flex-shrink-0 w-5 h-5',
        active: 'text-slate-500 dark:text-slate-400',
        inactive: 'text-slate-400 dark:text-slate-500'
      }
    }
  }
})
