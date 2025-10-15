import type { PlaywrightCommand } from '../types/command';

export const playwrightCommands: PlaywrightCommand[] = [
  // Locators (15 commands) - Blue (#3b82f6)
  {
    id: 1,
    name: 'getByRole',
    category: 'locators',
    description: 'Locate element by its accessible role',
    syntax: 'page.getByRole(role, options)',
    parameters: [
      { name: 'role', type: 'string', required: true, description: 'The accessible role of the element' },
      { name: 'options', type: 'object', required: false, description: 'Additional options like name, checked, etc.' }
    ],
    examples: [
      'page.getByRole("button", { name: "Submit" })',
      'page.getByRole("textbox", { name: "Email" })',
      'page.getByRole("checkbox", { checked: true })'
    ],
    relatedCommands: ['getByText', 'getByLabel', 'getByTestId'],
    documentationUrl: 'https://playwright.dev/docs/locators#locate-by-role'
  },
  {
    id: 2,
    name: 'getByText',
    category: 'locators',
    description: 'Locate element by its text content',
    syntax: 'page.getByText(text, options)',
    parameters: [
      { name: 'text', type: 'string | RegExp', required: true, description: 'Text content to match' },
      { name: 'options', type: 'object', required: false, description: 'Options like exact match' }
    ],
    examples: [
      'page.getByText("Click me")',
      'page.getByText(/click/i)',
      'page.getByText("Submit", { exact: true })'
    ],
    relatedCommands: ['getByRole', 'getByLabel', 'getByPlaceholder'],
    documentationUrl: 'https://playwright.dev/docs/locators#locate-by-text'
  },
  {
    id: 3,
    name: 'getByLabel',
    category: 'locators',
    description: 'Locate form control by its label',
    syntax: 'page.getByLabel(label, options)',
    parameters: [
      { name: 'label', type: 'string | RegExp', required: true, description: 'Label text to match' },
      { name: 'options', type: 'object', required: false, description: 'Additional options' }
    ],
    examples: [
      'page.getByLabel("Email Address")',
      'page.getByLabel(/email/i)',
      'page.getByLabel("Password", { exact: true })'
    ],
    relatedCommands: ['getByRole', 'getByText', 'getByPlaceholder'],
    documentationUrl: 'https://playwright.dev/docs/locators#locate-by-label'
  },
  {
    id: 4,
    name: 'getByPlaceholder',
    category: 'locators',
    description: 'Locate input by its placeholder text',
    syntax: 'page.getByPlaceholder(placeholder, options)',
    parameters: [
      { name: 'placeholder', type: 'string | RegExp', required: true, description: 'Placeholder text to match' },
      { name: 'options', type: 'object', required: false, description: 'Additional options' }
    ],
    examples: [
      'page.getByPlaceholder("Enter your email")',
      'page.getByPlaceholder(/email/i)',
      'page.getByPlaceholder("Search...", { exact: true })'
    ],
    relatedCommands: ['getByLabel', 'getByText', 'getByRole'],
    documentationUrl: 'https://playwright.dev/docs/locators#locate-by-placeholder'
  },
  {
    id: 5,
    name: 'getByAltText',
    category: 'locators',
    description: 'Locate image by its alt text',
    syntax: 'page.getByAltText(altText, options)',
    parameters: [
      { name: 'altText', type: 'string | RegExp', required: true, description: 'Alt text to match' },
      { name: 'options', type: 'object', required: false, description: 'Additional options' }
    ],
    examples: [
      'page.getByAltText("Company logo")',
      'page.getByAltText(/logo/i)',
      'page.getByAltText("Profile picture", { exact: true })'
    ],
    relatedCommands: ['getByTitle', 'getByRole', 'getByTestId'],
    documentationUrl: 'https://playwright.dev/docs/locators#locate-by-alt-text'
  },
  {
    id: 6,
    name: 'getByTitle',
    category: 'locators',
    description: 'Locate element by its title attribute',
    syntax: 'page.getByTitle(title, options)',
    parameters: [
      { name: 'title', type: 'string | RegExp', required: true, description: 'Title attribute to match' },
      { name: 'options', type: 'object', required: false, description: 'Additional options' }
    ],
    examples: [
      'page.getByTitle("Close dialog")',
      'page.getByTitle(/close/i)',
      'page.getByTitle("Help", { exact: true })'
    ],
    relatedCommands: ['getByAltText', 'getByRole', 'getByTestId'],
    documentationUrl: 'https://playwright.dev/docs/locators#locate-by-title'
  },
  {
    id: 7,
    name: 'getByTestId',
    category: 'locators',
    description: 'Locate element by its data-testid attribute',
    syntax: 'page.getByTestId(testId)',
    parameters: [
      { name: 'testId', type: 'string', required: true, description: 'Test ID to match' }
    ],
    examples: [
      'page.getByTestId("submit-button")',
      'page.getByTestId("user-menu")',
      'page.getByTestId("search-input")'
    ],
    relatedCommands: ['getByRole', 'getByText', 'getByLabel'],
    documentationUrl: 'https://playwright.dev/docs/locators#locate-by-test-id'
  },
  {
    id: 8,
    name: 'locator',
    category: 'locators',
    description: 'Create a locator for an element',
    syntax: 'page.locator(selector)',
    parameters: [
      { name: 'selector', type: 'string', required: true, description: 'CSS selector or XPath' }
    ],
    examples: [
      'page.locator("#submit-btn")',
      'page.locator(".nav-item")',
      'page.locator("//button[@type=\'submit\']")'
    ],
    relatedCommands: ['getByRole', 'getByText', 'first', 'last'],
    documentationUrl: 'https://playwright.dev/docs/locators#locator'
  },
  {
    id: 9,
    name: 'first',
    category: 'locators',
    description: 'Get the first matching element',
    syntax: 'locator.first()',
    parameters: [],
    examples: [
      'page.locator("button").first()',
      'page.getByRole("listitem").first()',
      'page.locator(".item").first()'
    ],
    relatedCommands: ['last', 'nth', 'locator'],
    documentationUrl: 'https://playwright.dev/docs/locators#first'
  },
  {
    id: 10,
    name: 'last',
    category: 'locators',
    description: 'Get the last matching element',
    syntax: 'locator.last()',
    parameters: [],
    examples: [
      'page.locator("button").last()',
      'page.getByRole("listitem").last()',
      'page.locator(".item").last()'
    ],
    relatedCommands: ['first', 'nth', 'locator'],
    documentationUrl: 'https://playwright.dev/docs/locators#last'
  },
  {
    id: 11,
    name: 'nth',
    category: 'locators',
    description: 'Get the nth matching element',
    syntax: 'locator.nth(index)',
    parameters: [
      { name: 'index', type: 'number', required: true, description: 'Zero-based index of the element' }
    ],
    examples: [
      'page.locator("button").nth(0)',
      'page.getByRole("listitem").nth(2)',
      'page.locator(".item").nth(-1)'
    ],
    relatedCommands: ['first', 'last', 'locator'],
    documentationUrl: 'https://playwright.dev/docs/locators#nth'
  },
  {
    id: 12,
    name: 'filter',
    category: 'locators',
    description: 'Filter locator results by additional criteria',
    syntax: 'locator.filter(options)',
    parameters: [
      { name: 'options', type: 'object', required: true, description: 'Filter criteria' }
    ],
    examples: [
      'page.locator("button").filter({ hasText: "Submit" })',
      'page.locator("li").filter({ has: page.locator("input[checked]") })',
      'page.locator("div").filter({ hasNot: page.locator(".hidden") })'
    ],
    relatedCommands: ['and', 'or', 'locator'],
    documentationUrl: 'https://playwright.dev/docs/locators#filter'
  },
  {
    id: 13,
    name: 'and',
    category: 'locators',
    description: 'Combine multiple locators with AND logic',
    syntax: 'locator.and(other)',
    parameters: [
      { name: 'other', type: 'Locator', required: true, description: 'Another locator to combine with' }
    ],
    examples: [
      'page.getByRole("button").and(page.getByText("Submit"))',
      'page.locator("input").and(page.locator("[type=\'email\']"))',
      'page.getByLabel("Name").and(page.locator(":visible"))'
    ],
    relatedCommands: ['or', 'filter', 'locator'],
    documentationUrl: 'https://playwright.dev/docs/locators#and'
  },
  {
    id: 14,
    name: 'or',
    category: 'locators',
    description: 'Combine multiple locators with OR logic',
    syntax: 'locator.or(other)',
    parameters: [
      { name: 'other', type: 'Locator', required: true, description: 'Another locator to combine with' }
    ],
    examples: [
      'page.getByRole("button").or(page.getByText("Submit"))',
      'page.locator("#submit").or(page.locator(".submit-btn"))',
      'page.getByLabel("Email").or(page.getByPlaceholder("email"))'
    ],
    relatedCommands: ['and', 'filter', 'locator'],
    documentationUrl: 'https://playwright.dev/docs/locators#or'
  },
  {
    id: 15,
    name: 'count',
    category: 'locators',
    description: 'Get the number of matching elements',
    syntax: 'await locator.count()',
    parameters: [],
    examples: [
      'await page.locator("button").count()',
      'await page.getByRole("listitem").count()',
      'const itemCount = await page.locator(".item").count()'
    ],
    relatedCommands: ['first', 'last', 'nth'],
    documentationUrl: 'https://playwright.dev/docs/locators#count'

  },

  // Actions (12 commands) - Green (#10b981)
  {
    id: 16,
    name: 'click',
    category: 'actions',
    description: 'Click on an element',
    syntax: 'await locator.click(options)',
    parameters: [
      { name: 'options', type: 'object', required: false, description: 'Click options like button, modifiers, etc.' }
    ],
    examples: [
      'await page.getByRole("button").click()',
      'await page.locator("#submit").click({ button: "right" })',
      'await page.getByText("Submit").click({ force: true })'
    ],
    relatedCommands: ['dblclick', 'hover', 'press'],
    documentationUrl: 'https://playwright.dev/docs/actions#click'
  },
  {
    id: 17,
    name: 'dblclick',
    category: 'actions',
    description: 'Double-click on an element',
    syntax: 'await locator.dblclick(options)',
    parameters: [
      { name: 'options', type: 'object', required: false, description: 'Double-click options' }
    ],
    examples: [
      'await page.locator(".file").dblclick()',
      'await page.getByText("Edit").dblclick()',
      'await page.locator("#item").dblclick({ button: "right" })'
    ],
    relatedCommands: ['click', 'hover', 'press'],
    documentationUrl: 'https://playwright.dev/docs/actions#double-click'
  },
  {
    id: 18,
    name: 'fill',
    category: 'actions',
    description: 'Fill an input field with text',
    syntax: 'await locator.fill(value)',
    parameters: [
      { name: 'value', type: 'string', required: true, description: 'Text to fill the input with' }
    ],
    examples: [
      'await page.getByLabel("Email").fill("user@example.com")',
      'await page.locator("#password").fill("secret123")',
      'await page.getByPlaceholder("Search").fill("playwright")'
    ],
    relatedCommands: ['type', 'press', 'selectOption'],
    documentationUrl: 'https://playwright.dev/docs/actions#fill'
  },
  {
    id: 19,
    name: 'type',
    category: 'actions',
    description: 'Type text character by character',
    syntax: 'await locator.type(text, options)',
    parameters: [
      { name: 'text', type: 'string', required: true, description: 'Text to type' },
      { name: 'options', type: 'object', required: false, description: 'Type options like delay' }
    ],
    examples: [
      'await page.getByLabel("Message").type("Hello world")',
      'await page.locator("#input").type("text", { delay: 100 })',
      'await page.getByRole("textbox").type("slow typing")'
    ],
    relatedCommands: ['fill', 'press', 'keyboard'],
    documentationUrl: 'https://playwright.dev/docs/actions#type'
  },
  {
    id: 20,
    name: 'press',
    category: 'actions',
    description: 'Press a key on an element',
    syntax: 'await locator.press(key)',
    parameters: [
      { name: 'key', type: 'string', required: true, description: 'Key to press (e.g., "Enter", "Tab", "Escape")' }
    ],
    examples: [
      'await page.getByRole("textbox").press("Enter")',
      'await page.locator("#input").press("Tab")',
      'await page.getByLabel("Search").press("Escape")'
    ],
    relatedCommands: ['type', 'keyboard', 'click'],
    documentationUrl: 'https://playwright.dev/docs/actions#press'
  },
  {
    id: 21,
    name: 'selectOption',
    category: 'actions',
    description: 'Select option(s) in a select element',
    syntax: 'await locator.selectOption(values)',
    parameters: [
      { name: 'values', type: 'string | string[] | object | object[]', required: true, description: 'Option values to select' }
    ],
    examples: [
      'await page.locator("select").selectOption("option1")',
      'await page.getByLabel("Country").selectOption(["US", "CA"])',
      'await page.locator("#multi-select").selectOption({ label: "Option 1" })'
    ],
    relatedCommands: ['fill', 'click', 'check'],
    documentationUrl: 'https://playwright.dev/docs/actions#select-option'
  },
  {
    id: 22,
    name: 'check',
    category: 'actions',
    description: 'Check a checkbox or radio button',
    syntax: 'await locator.check(options)',
    parameters: [
      { name: 'options', type: 'object', required: false, description: 'Check options' }
    ],
    examples: [
      'await page.getByLabel("I agree").check()',
      'await page.locator("#terms").check({ force: true })',
      'await page.getByRole("checkbox").check()'
    ],
    relatedCommands: ['uncheck', 'click', 'selectOption'],
    documentationUrl: 'https://playwright.dev/docs/actions#check'
  },
  {
    id: 23,
    name: 'uncheck',
    category: 'actions',
    description: 'Uncheck a checkbox',
    syntax: 'await locator.uncheck(options)',
    parameters: [
      { name: 'options', type: 'object', required: false, description: 'Uncheck options' }
    ],
    examples: [
      'await page.getByLabel("Subscribe").uncheck()',
      'await page.locator("#newsletter").uncheck({ force: true })',
      'await page.getByRole("checkbox").uncheck()'
    ],
    relatedCommands: ['check', 'click', 'selectOption'],
    documentationUrl: 'https://playwright.dev/docs/actions#uncheck'
  },
  {
    id: 24,
    name: 'hover',
    category: 'actions',
    description: 'Hover over an element',
    syntax: 'await locator.hover(options)',
    parameters: [
      { name: 'options', type: 'object', required: false, description: 'Hover options like position' }
    ],
    examples: [
      'await page.getByRole("button").hover()',
      'await page.locator(".menu-item").hover()',
      'await page.getByText("Tooltip").hover({ position: { x: 10, y: 10 } })'
    ],
    relatedCommands: ['click', 'focus', 'blur'],
    documentationUrl: 'https://playwright.dev/docs/actions#hover'
  },
  {
    id: 25,
    name: 'focus',
    category: 'actions',
    description: 'Focus on an element',
    syntax: 'await locator.focus()',
    parameters: [],
    examples: [
      'await page.getByRole("textbox").focus()',
      'await page.locator("#input").focus()',
      'await page.getByLabel("Email").focus()'
    ],
    relatedCommands: ['blur', 'click', 'press'],
    documentationUrl: 'https://playwright.dev/docs/actions#focus'
  },
  {
    id: 26,
    name: 'blur',
    category: 'actions',
    description: 'Remove focus from an element',
    syntax: 'await locator.blur()',
    parameters: [],
    examples: [
      'await page.getByRole("textbox").blur()',
      'await page.locator("#input").blur()',
      'await page.getByLabel("Email").blur()'
    ],
    relatedCommands: ['focus', 'click', 'press'],
    documentationUrl: 'https://playwright.dev/docs/actions#blur'
  },
  {
    id: 27,
    name: 'dragTo',
    category: 'actions',
    description: 'Drag an element to another element',
    syntax: 'await locator.dragTo(target, options)',
    parameters: [
      { name: 'target', type: 'Locator', required: true, description: 'Target element to drag to' },
      { name: 'options', type: 'object', required: false, description: 'Drag options' }
    ],
    examples: [
      'await page.locator("#item1").dragTo(page.locator("#drop-zone"))',
      'await page.getByText("File").dragTo(page.locator(".trash"))',
      'await page.locator(".card").dragTo(page.locator(".column"))'
    ],
    relatedCommands: ['click', 'hover', 'press'],
    documentationUrl: 'https://playwright.dev/docs/actions#drag-to'
  },

  // Assertions (8 commands) - Orange (#f59e0b)
  {
    id: 28,
    name: 'expect',
    category: 'assertions',
    description: 'Create an assertion for an element',
    syntax: 'await expect(locator).matcher()',
    parameters: [
      { name: 'locator', type: 'Locator', required: true, description: 'Element to assert on' },
      { name: 'matcher', type: 'function', required: true, description: 'Assertion matcher' }
    ],
    examples: [
      'await expect(page.getByRole("button")).toBeVisible()',
      'await expect(page.locator("#input")).toHaveValue("test")',
      'await expect(page.getByText("Success")).toBeInViewport()'
    ],
    relatedCommands: ['toBeVisible', 'toHaveText', 'toHaveValue'],
    documentationUrl: 'https://playwright.dev/docs/test-assertions#expect'
  },
  {
    id: 29,
    name: 'toBeVisible',
    category: 'assertions',
    description: 'Assert that element is visible',
    syntax: 'await expect(locator).toBeVisible()',
    parameters: [],
    examples: [
      'await expect(page.getByRole("button")).toBeVisible()',
      'await expect(page.locator(".modal")).toBeVisible()',
      'await expect(page.getByText("Loading")).toBeVisible()'
    ],
    relatedCommands: ['toBeHidden', 'expect', 'toHaveText'],
    documentationUrl: 'https://playwright.dev/docs/test-assertions#expect-to-be-visible'
  },
  {
    id: 30,
    name: 'toBeHidden',
    category: 'assertions',
    description: 'Assert that element is hidden',
    syntax: 'await expect(locator).toBeHidden()',
    parameters: [],
    examples: [
      'await expect(page.locator(".error")).toBeHidden()',
      'await expect(page.getByText("Loading")).toBeHidden()',
      'await expect(page.locator("#modal")).toBeHidden()'
    ],
    relatedCommands: ['toBeVisible', 'expect', 'toHaveText'],
    documentationUrl: 'https://playwright.dev/docs/test-assertions#expect-to-be-hidden'
  },
  {
    id: 31,
    name: 'toHaveText',
    category: 'assertions',
    description: 'Assert that element has specific text',
    syntax: 'await expect(locator).toHaveText(text)',
    parameters: [
      { name: 'text', type: 'string | RegExp | string[]', required: true, description: 'Expected text content' }
    ],
    examples: [
      'await expect(page.getByRole("heading")).toHaveText("Welcome")',
      'await expect(page.locator(".message")).toHaveText(/success/i)',
      'await expect(page.locator("li")).toHaveText(["Item 1", "Item 2"])'
    ],
    relatedCommands: ['toHaveValue', 'expect', 'toBeVisible'],
    documentationUrl: 'https://playwright.dev/docs/test-assertions#expect-to-have-text'
  },
  {
    id: 32,
    name: 'toHaveValue',
    category: 'assertions',
    description: 'Assert that input has specific value',
    syntax: 'await expect(locator).toHaveValue(value)',
    parameters: [
      { name: 'value', type: 'string | RegExp', required: true, description: 'Expected input value' }
    ],
    examples: [
      'await expect(page.getByLabel("Email")).toHaveValue("user@example.com")',
      'await expect(page.locator("#input")).toHaveValue(/test/)',
      'await expect(page.getByRole("textbox")).toHaveValue("")'
    ],
    relatedCommands: ['toHaveText', 'expect', 'toBeVisible'],
    documentationUrl: 'https://playwright.dev/docs/test-assertions#expect-to-have-value'
  },
  {
    id: 33,
    name: 'toBeChecked',
    category: 'assertions',
    description: 'Assert that checkbox/radio is checked',
    syntax: 'await expect(locator).toBeChecked()',
    parameters: [],
    examples: [
      'await expect(page.getByLabel("I agree")).toBeChecked()',
      'await expect(page.locator("#terms")).toBeChecked()',
      'await expect(page.getByRole("checkbox")).toBeChecked()'
    ],
    relatedCommands: ['toBeEnabled', 'expect', 'toHaveValue'],
    documentationUrl: 'https://playwright.dev/docs/test-assertions#expect-to-be-checked'
  },
  {
    id: 34,
    name: 'toBeEnabled',
    category: 'assertions',
    description: 'Assert that element is enabled',
    syntax: 'await expect(locator).toBeEnabled()',
    parameters: [],
    examples: [
      'await expect(page.getByRole("button")).toBeEnabled()',
      'await expect(page.locator("#submit")).toBeEnabled()',
      'await expect(page.getByText("Submit")).toBeEnabled()'
    ],
    relatedCommands: ['toBeChecked', 'expect', 'toBeVisible'],
    documentationUrl: 'https://playwright.dev/docs/test-assertions#expect-to-be-enabled'
  },
  {
    id: 35,
    name: 'toHaveCount',
    category: 'assertions',
    description: 'Assert that locator matches specific number of elements',
    syntax: 'await expect(locator).toHaveCount(count)',
    parameters: [
      { name: 'count', type: 'number', required: true, description: 'Expected number of elements' }
    ],
    examples: [
      'await expect(page.locator("li")).toHaveCount(5)',
      'await expect(page.getByRole("button")).toHaveCount(3)',
      'await expect(page.locator(".item")).toHaveCount(0)'
    ],
    relatedCommands: ['expect', 'toBeVisible', 'toHaveText'],
    documentationUrl: 'https://playwright.dev/docs/test-assertions#expect-to-have-count'
  },

  // Navigation (10 commands) - Purple (#8b5cf6)
  {
    id: 36,
    name: 'goto',
    category: 'navigation',
    description: 'Navigate to a URL',
    syntax: 'await page.goto(url, options)',
    parameters: [
      { name: 'url', type: 'string', required: true, description: 'URL to navigate to' },
      { name: 'options', type: 'object', required: false, description: 'Navigation options' }
    ],
    examples: [
      'await page.goto("https://example.com")',
      'await page.goto("/login", { waitUntil: "networkidle" })',
      'await page.goto("https://app.com", { timeout: 30000 })'
    ],
    relatedCommands: ['goBack', 'goForward', 'reload'],
    documentationUrl: 'https://playwright.dev/docs/navigation#goto'
  },
  {
    id: 37,
    name: 'goBack',
    category: 'navigation',
    description: 'Navigate back in browser history',
    syntax: 'await page.goBack(options)',
    parameters: [
      { name: 'options', type: 'object', required: false, description: 'Navigation options' }
    ],
    examples: [
      'await page.goBack()',
      'await page.goBack({ waitUntil: "networkidle" })',
      'await page.goBack({ timeout: 5000 })'
    ],
    relatedCommands: ['goForward', 'goto', 'reload'],
    documentationUrl: 'https://playwright.dev/docs/navigation#go-back'
  },
  {
    id: 38,
    name: 'goForward',
    category: 'navigation',
    description: 'Navigate forward in browser history',
    syntax: 'await page.goForward(options)',
    parameters: [
      { name: 'options', type: 'object', required: false, description: 'Navigation options' }
    ],
    examples: [
      'await page.goForward()',
      'await page.goForward({ waitUntil: "networkidle" })',
      'await page.goForward({ timeout: 5000 })'
    ],
    relatedCommands: ['goBack', 'goto', 'reload'],
    documentationUrl: 'https://playwright.dev/docs/navigation#go-forward'
  },
  {
    id: 39,
    name: 'reload',
    category: 'navigation',
    description: 'Reload the current page',
    syntax: 'await page.reload(options)',
    parameters: [
      { name: 'options', type: 'object', required: false, description: 'Reload options' }
    ],
    examples: [
      'await page.reload()',
      'await page.reload({ waitUntil: "networkidle" })',
      'await page.reload({ timeout: 10000 })'
    ],
    relatedCommands: ['goto', 'goBack', 'goForward'],
    documentationUrl: 'https://playwright.dev/docs/navigation#reload'
  },
  {
    id: 40,
    name: 'waitForLoadState',
    category: 'navigation',
    description: 'Wait for page to reach a specific load state',
    syntax: 'await page.waitForLoadState(state, options)',
    parameters: [
      { name: 'state', type: 'string', required: true, description: 'Load state to wait for' },
      { name: 'options', type: 'object', required: false, description: 'Wait options' }
    ],
    examples: [
      'await page.waitForLoadState("networkidle")',
      'await page.waitForLoadState("domcontentloaded")',
      'await page.waitForLoadState("load", { timeout: 10000 })'
    ],
    relatedCommands: ['waitForURL', 'waitForResponse', 'goto'],
    documentationUrl: 'https://playwright.dev/docs/navigation#wait-for-load-state'
  },
  {
    id: 41,
    name: 'waitForURL',
    category: 'navigation',
    description: 'Wait for page URL to match pattern',
    syntax: 'await page.waitForURL(url, options)',
    parameters: [
      { name: 'url', type: 'string | RegExp | function', required: true, description: 'URL pattern to wait for' },
      { name: 'options', type: 'object', required: false, description: 'Wait options' }
    ],
    examples: [
      'await page.waitForURL("**/dashboard")',
      'await page.waitForURL(/\\/login/)',
      'await page.waitForURL(url => url.includes("success"))'
    ],
    relatedCommands: ['waitForLoadState', 'waitForResponse', 'goto'],
    documentationUrl: 'https://playwright.dev/docs/navigation#wait-for-url'
  },
  {
    id: 42,
    name: 'waitForResponse',
    category: 'navigation',
    description: 'Wait for network response matching pattern',
    syntax: 'await page.waitForResponse(urlOrPredicate, options)',
    parameters: [
      { name: 'urlOrPredicate', type: 'string | RegExp | function', required: true, description: 'Response pattern to wait for' },
      { name: 'options', type: 'object', required: false, description: 'Wait options' }
    ],
    examples: [
      'await page.waitForResponse("**/api/users")',
      'await page.waitForResponse(/\\/api\\/data/)',
      'await page.waitForResponse(response => response.url().includes("api"))'
    ],
    relatedCommands: ['waitForRequest', 'waitForLoadState', 'route'],
    documentationUrl: 'https://playwright.dev/docs/network#wait-for-response'
  },
  {
    id: 43,
    name: 'waitForRequest',
    category: 'navigation',
    description: 'Wait for network request matching pattern',
    syntax: 'await page.waitForRequest(urlOrPredicate, options)',
    parameters: [
      { name: 'urlOrPredicate', type: 'string | RegExp | function', required: true, description: 'Request pattern to wait for' },
      { name: 'options', type: 'object', required: false, description: 'Wait options' }
    ],
    examples: [
      'await page.waitForRequest("**/api/submit")',
      'await page.waitForRequest(/\\/api\\/upload/)',
      'await page.waitForRequest(request => request.method() === "POST")'
    ],
    relatedCommands: ['waitForResponse', 'waitForLoadState', 'route'],
    documentationUrl: 'https://playwright.dev/docs/network#wait-for-request'
  },
  {
    id: 44,
    name: 'route',
    category: 'navigation',
    description: 'Intercept and modify network requests',
    syntax: 'await page.route(url, handler)',
    parameters: [
      { name: 'url', type: 'string | RegExp | function', required: true, description: 'URL pattern to intercept' },
      { name: 'handler', type: 'function', required: true, description: 'Request handler function' }
    ],
    examples: [
      'await page.route("**/api/data", route => route.fulfill({ json: { data: "mock" } }))',
      'await page.route(/\\/api\\//, route => route.abort())',
      'await page.route("**/*", route => route.continue())'
    ],
    relatedCommands: ['unroute', 'waitForResponse', 'waitForRequest'],
    documentationUrl: 'https://playwright.dev/docs/network#route'
  },
  {
    id: 45,
    name: 'unroute',
    category: 'navigation',
    description: 'Remove network request interception',
    syntax: 'await page.unroute(url, handler)',
    parameters: [
      { name: 'url', type: 'string | RegExp | function', required: false, description: 'URL pattern to remove' },
      { name: 'handler', type: 'function', required: false, description: 'Specific handler to remove' }
    ],
    examples: [
      'await page.unroute("**/api/data")',
      'await page.unroute(/\\/api\\//)',
      'await page.unroute()'
    ],
    relatedCommands: ['route', 'waitForResponse', 'waitForRequest'],
    documentationUrl: 'https://playwright.dev/docs/network#unroute'
  },

  // Browser/Context (13 commands) - Red (#ef4444)
  {
    id: 46,
    name: 'newPage',
    category: 'browser',
    description: 'Create a new page in the browser context',
    syntax: 'await context.newPage()',
    parameters: [],
    examples: [
      'const newPage = await context.newPage()',
      'const page2 = await browserContext.newPage()',
      'const popup = await context.newPage()'
    ],
    relatedCommands: ['newContext', 'close', 'screenshot'],
    documentationUrl: 'https://playwright.dev/docs/pages#creating-a-page'
  },
  {
    id: 47,
    name: 'newContext',
    category: 'browser',
    description: 'Create a new browser context',
    syntax: 'await browser.newContext(options)',
    parameters: [
      { name: 'options', type: 'object', required: false, description: 'Context options like viewport, userAgent, etc.' }
    ],
    examples: [
      'const context = await browser.newContext()',
      'const context = await browser.newContext({ viewport: { width: 1280, height: 720 } })',
      'const context = await browser.newContext({ userAgent: "Custom Agent" })'
    ],
    relatedCommands: ['newPage', 'close', 'setViewportSize'],
    documentationUrl: 'https://playwright.dev/docs/browser-contexts#creating-a-context'
  },
  {
    id: 48,
    name: 'close',
    category: 'browser',
    description: 'Close a page or context',
    syntax: 'await page.close() | await context.close()',
    parameters: [],
    examples: [
      'await page.close()',
      'await context.close()',
      'await browser.close()'
    ],
    relatedCommands: ['newPage', 'newContext', 'screenshot'],
    documentationUrl: 'https://playwright.dev/docs/pages#closing-a-page'
  },
  {
    id: 49,
    name: 'addCookies',
    category: 'browser',
    description: 'Add cookies to the browser context',
    syntax: 'await context.addCookies(cookies)',
    parameters: [
      { name: 'cookies', type: 'Cookie[]', required: true, description: 'Array of cookies to add' }
    ],
    examples: [
      'await context.addCookies([{ name: "session", value: "abc123", url: "https://example.com" }])',
      'await context.addCookies([{ name: "theme", value: "dark", domain: ".example.com" }])',
      'await context.addCookies(cookieArray)'
    ],
    relatedCommands: ['clearCookies', 'newContext', 'setExtraHTTPHeaders'],
    documentationUrl: 'https://playwright.dev/docs/browser-contexts#cookies'
  },
  {
    id: 50,
    name: 'clearCookies',
    category: 'browser',
    description: 'Clear all cookies from the browser context',
    syntax: 'await context.clearCookies()',
    parameters: [],
    examples: [
      'await context.clearCookies()',
      'await page.context().clearCookies()',
      'await browserContext.clearCookies()'
    ],
    relatedCommands: ['addCookies', 'newContext', 'setExtraHTTPHeaders'],
    documentationUrl: 'https://playwright.dev/docs/browser-contexts#cookies'
  },
  {
    id: 51,
    name: 'addInitScript',
    category: 'browser',
    description: 'Add a script to run before page loads',
    syntax: 'await context.addInitScript(script, arg)',
    parameters: [
      { name: 'script', type: 'string | function', required: true, description: 'Script to run' },
      { name: 'arg', type: 'any', required: false, description: 'Argument to pass to the script' }
    ],
    examples: [
      'await context.addInitScript("window.myGlobal = true")',
      'await context.addInitScript(() => { window.customVar = "test" })',
      'await context.addInitScript(script, "argument")'
    ],
    relatedCommands: ['newContext', 'setExtraHTTPHeaders', 'setUserAgent'],
    documentationUrl: 'https://playwright.dev/docs/browser-contexts#add-init-script'
  },
  {
    id: 52,
    name: 'setExtraHTTPHeaders',
    category: 'browser',
    description: 'Set extra HTTP headers for all requests',
    syntax: 'await context.setExtraHTTPHeaders(headers)',
    parameters: [
      { name: 'headers', type: 'object', required: true, description: 'Headers to set' }
    ],
    examples: [
      'await context.setExtraHTTPHeaders({ "Authorization": "Bearer token" })',
      'await context.setExtraHTTPHeaders({ "X-Custom": "value" })',
      'await context.setExtraHTTPHeaders(headers)'
    ],
    relatedCommands: ['addCookies', 'setUserAgent', 'setGeolocation'],
    documentationUrl: 'https://playwright.dev/docs/browser-contexts#extra-http-headers'
  },
  {
    id: 53,
    name: 'setGeolocation',
    category: 'browser',
    description: 'Set geolocation for the browser context',
    syntax: 'await context.setGeolocation(geolocation)',
    parameters: [
      { name: 'geolocation', type: 'object', required: true, description: 'Geolocation coordinates' }
    ],
    examples: [
      'await context.setGeolocation({ latitude: 40.7128, longitude: -74.0060 })',
      'await context.setGeolocation({ latitude: 51.5074, longitude: -0.1278 })',
      'await context.setGeolocation(geoData)'
    ],
    relatedCommands: ['setUserAgent', 'setViewportSize', 'setOffline'],
    documentationUrl: 'https://playwright.dev/docs/browser-contexts#geolocation'
  },
  {
    id: 54,
    name: 'setOffline',
    category: 'browser',
    description: 'Set browser context to offline mode',
    syntax: 'await context.setOffline(offline)',
    parameters: [
      { name: 'offline', type: 'boolean', required: true, description: 'Whether to set offline mode' }
    ],
    examples: [
      'await context.setOffline(true)',
      'await context.setOffline(false)',
      'await page.context().setOffline(true)'
    ],
    relatedCommands: ['setGeolocation', 'setUserAgent', 'setViewportSize'],
    documentationUrl: 'https://playwright.dev/docs/browser-contexts#offline'
  },
  {
    id: 55,
    name: 'setUserAgent',
    category: 'browser',
    description: 'Set user agent for the browser context',
    syntax: 'await context.setUserAgent(userAgent)',
    parameters: [
      { name: 'userAgent', type: 'string', required: true, description: 'User agent string' }
    ],
    examples: [
      'await context.setUserAgent("Mozilla/5.0 (Custom Browser)")',
      'await context.setUserAgent("Mobile Safari")',
      'await context.setUserAgent(customUserAgent)'
    ],
    relatedCommands: ['setGeolocation', 'setViewportSize', 'setExtraHTTPHeaders'],
    documentationUrl: 'https://playwright.dev/docs/browser-contexts#user-agent'
  },
  {
    id: 56,
    name: 'setViewportSize',
    category: 'browser',
    description: 'Set viewport size for the page',
    syntax: 'await page.setViewportSize(size)',
    parameters: [
      { name: 'size', type: 'object', required: true, description: 'Viewport dimensions' }
    ],
    examples: [
      'await page.setViewportSize({ width: 1280, height: 720 })',
      'await page.setViewportSize({ width: 375, height: 667 })',
      'await page.setViewportSize(viewportSize)'
    ],
    relatedCommands: ['setUserAgent', 'setGeolocation', 'screenshot'],
    documentationUrl: 'https://playwright.dev/docs/pages#viewport'
  },
  {
    id: 57,
    name: 'screenshot',
    category: 'browser',
    description: 'Take a screenshot of the page or element',
    syntax: 'await page.screenshot(options) | await locator.screenshot(options)',
    parameters: [
      { name: 'options', type: 'object', required: false, description: 'Screenshot options like path, fullPage, etc.' }
    ],
    examples: [
      'await page.screenshot({ path: "screenshot.png" })',
      'await page.screenshot({ fullPage: true })',
      'await page.locator(".element").screenshot({ path: "element.png" })'
    ],
    relatedCommands: ['pdf', 'setViewportSize', 'close'],
    documentationUrl: 'https://playwright.dev/docs/screenshots'
  },
  {
    id: 58,
    name: 'pdf',
    category: 'browser',
    description: 'Generate PDF of the page',
    syntax: 'await page.pdf(options)',
    parameters: [
      { name: 'options', type: 'object', required: false, description: 'PDF options like path, format, etc.' }
    ],
    examples: [
      'await page.pdf({ path: "page.pdf" })',
      'await page.pdf({ format: "A4", printBackground: true })',
      'await page.pdf({ path: "report.pdf", margin: { top: "1cm" } })'
    ],
    relatedCommands: ['screenshot', 'setViewportSize', 'close'],
    documentationUrl: 'https://playwright.dev/docs/pdf'
  }
];

export const getCommandsByCategory = (category: string) => {
  return playwrightCommands.filter(command => command.category === category);
};

export const getCommandById = (id: number) => {
  return playwrightCommands.find(command => command.id === id);
};

export const searchCommands = (searchTerm: string) => {
  const term = searchTerm.toLowerCase();
  return playwrightCommands.filter(command => 
    command.name.toLowerCase().includes(term) ||
    command.description.toLowerCase().includes(term) ||
    command.syntax.toLowerCase().includes(term) ||
    command.examples.some(example => example.toLowerCase().includes(term))
  );
};
