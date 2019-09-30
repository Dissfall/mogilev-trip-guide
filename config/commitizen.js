"use strict";

module.exports = {
  types: [
    {
      value: "build",
      name: "build:     Building a project or changing external dependencies | Сборка проекта или изменения внешних зависимостей"
    },
    {
      value: "ci",
      name: "ci:        CI or scripts configurin | Настройка CI и работа со скриптами" },
    {
      value: "docs",
      name: "docs:      Documentation updates | Правка документации"
    },
    {
      value: "feat",
      name: "feat:      New features | Добавление нового функционала"
    },
    {
      value: "fix",
      name: "fix:       Bug fixes | Исправление ошибок"
    },
    {
      value: "perf",
      name: "perf:      Perfomance improvement changes | Изменения направленные на улучшение производительности"
    },
    {
      value: "refactor",
      name: "refactor:  Editing code without fixing bugs or adding new features | Правки кода без исправления ошибок или добавления новых функций"
    },
    {
      value: "revert",
      name: "revert:    Rollback to previous commits | Откат на предыдущие коммиты"
    },
    {
      value: "style",
      name: "style:     Codestyle editing (tabulataion, spacing, dots, etc.) | Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)"
    },
    {
      value: "test",
      name: "test:      Adding new tests | Добавление тестов"
    }
  ],

	messages: {
		type: "What changes are you making?\nКакие изменения вы вносите?",
		scope: "\nSelect the SCOPE you changed (optional):\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):",
		customScope: "Indicate your SCOPE:\nУкажите свою ОБЛАСТЬ:",
		subject: "Write a SHORT description in the IMPERATIVE\nНапишите ОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n",
		body:
			'Write a DETAILED description (optional). Use "|" for a new line:\nНапишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
		breaking: "BREAKING CHANGES list (optional):\nСписок BREAKING CHANGES (опционально):\n",
		footer:
			"A place for metadata (tickets, links and the rest). For example: SECRETMRKT-700, SECRETMRKT-800:\nМесто для метаданных (тикетов, ссылок и остального). Например: SECRETMRKT-700, SECRETMRKT-800:\n",
		confirmCommit: "Do you agree with the resulting commit?\nВас устраивает получившийся коммит?"
	},

	allowCustomScopes: true,
	allowBreakingChanges: false,
	footerPrefix: "METADATA:",
	subjectLimit: 72
}
