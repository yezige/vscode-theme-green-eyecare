const getConfig = (opt) => {
  let conf = {
    name: opt.name,
    type: opt.type,
    foreground: '#ffffff92', // 文字前景色
    background: '#181821', // 主背景色
    backgroundHighlight: '#121217', // 背景色加深
    border: '#262626', // 边框
    borderDarken: '#ffffff15', // 边框变暗
    shadow: '#ffffff09', // 阴影
    pointColor: '#288d5b', // 点缀色，绿色
    pointColorDarken: '#1f804f', // 点缀色变暗
    pointColorDarkenest: '#0c3420', // 点缀色变最暗
    pointColorBrighten: '#2bb36f', // 点缀色变亮
    bracket1: '#ae6900', // 括号对1
    bracket2: '#007bcd', // 括号对2
    bracket3: '#ae6900', // 括号对3
    hoverPanelBackground: '#282828', // 鼠标悬停背景色
    lineBackground: '#ffffff10', // 行高亮背景色
    activeTabBackground: '#292929', // 高亮标签页色
    codeBackground: '#ffffff12', // 代码块背景色
    selectionBackground: '#1f3e83', // 选中后颜色
    debugBackground: '#202020', // 调试工具栏颜色
    disabledForeground: '#ffffff25', // 无效内容前景色
    errorForeground: '#cc433a', // 错误内容前景色
    errorBackground: '#7d1d17', // 错误内容背景色
    warningForeground: '#ffffff92', // 异常内容前景色
    addedForeground: '#ffffff92', // 新添加文件前景色
    findForeground: '#694924', // 搜索结果颜色
    lineNumberForeground: '#ffffff20', // 行号非激活颜色
    whitespaceForeground: '#ffffff10', // 空格颜色
    linkactiveForeground: '#7487f3', // 链接激活色
    scrollbarForeground: '#ffffff40', // 滚动条激活色
    commentForeground: '#ffffff30', // 备注前景色
    keywordForeground: '#ae56bd', // 关键字前景色
    variableForeground: '#c2376e', // 变量前景色
    sysFunctionForeground: '#376cce', // 系统方法名
    functionForeground: '#376cce', // 自定义方法名
    classForeground: '#ba7e16', // 类名
    regexpForeground: '#d46a6a', // 正则
    attributeForeground: '#AB46BD', // 属性
    constForeground: '#aea815', // 常量
    otherForeground: '#ae7e00' // 其他
  }
  return setConfig(conf)
}

const setConfig = (c) => {
  return {
    name: c.name,
    type: c.type,
    colors: {
      'activityBar.background': c.background,
      'activityBar.foreground': c.pointColorBrighten,
      'activityBar.inactiveForeground': c.pointColorDarken,
      'activityBarBadge.background': c.pointColorDarken,
      'activityBarBadge.foreground': c.foreground,
      'badge.background': c.pointColor,
      'badge.foreground': c.foreground,
      'button.background': c.pointColor,
      'button.foreground': c.foreground,
      'button.hoverBackground': c.pointColor,
      'debugExceptionWidget.background': c.errorBackground,
      'debugToolBar.background': c.debugBackground,
      descriptionForeground: c.foreground,
      disabledForeground: c.disabledForeground,
      'dropdown.background': c.background,
      'dropdown.border': c.border,
      'editor.background': c.background,
      'editor.findMatchBackground': c.findForeground,
      'editor.findMatchHighlightBackground': `${c.findForeground}60`,
      'editor.foreground': c.foreground,
      'editor.hoverHighlightBackground': c.lineBackground,
      'editor.lineHighlightBackground': c.lineBackground,
      'editor.selectionBackground': c.selectionBackground,
      'editorBracketHighlight.foreground1': c.bracket1,
      'editorBracketHighlight.foreground2': c.bracket2,
      'editorBracketHighlight.foreground3': c.bracket3,
      'editorBracketMatch.border': c.borderDarken,
      'editorCursor.foreground': c.foreground,
      'editorGroupHeader.tabsBackground': c.background,
      'editorHoverWidget.background': c.hoverPanelBackground,
      'editorHoverWidget.border': c.border,
      'editorIndentGuide.activeBackground1': c.border,
      'editorIndentGuide.background1': c.background,
      'editorLineNumber.activeForeground': c.pointColor,
      'editorLineNumber.foreground': c.lineNumberForeground,
      'editorLink.activeForeground': c.linkactiveForeground,
      'editorSuggestWidget.background': c.background,
      'editorSuggestWidget.border': c.border,
      'editorSuggestWidget.foreground': c.foreground,
      'editorSuggestWidget.highlightForeground': c.foreground,
      'editorSuggestWidget.selectedBackground': c.border,
      'editorWhitespace.foreground': c.whitespaceForeground,
      'editorWidget.background': c.background,
      'editorWidget.resizeBorder': c.background,
      errorForeground: c.errorForeground,
      'extensionButton.prominentBackground': c.pointColor,
      'extensionButton.prominentHoverBackground': c.pointColorBrighten,
      focusBorder: c.border,
      foreground: c.foreground,
      'gitDecoration.addedResourceForeground': c.addedForeground,
      'gitDecoration.modifiedResourceForeground': c.warningForeground,
      'gitDecoration.untrackedResourceForeground': c.pointColor,
      'icon.foreground': c.foreground,
      'input.background': c.background,
      'input.border': c.border,
      'inputOption.activeBackground': c.pointColor,
      'inputOption.activeBorder': c.border,
      'list.activeSelectionBackground': c.lineBackground,
      'list.activeSelectionForeground': c.pointColor,
      'list.errorForeground': c.errorForeground,
      'list.focusBackground': c.hoverPanelBackground,
      'list.highlightForeground': c.pointColor,
      'list.hoverBackground': c.lineBackground,
      'list.inactiveFocusBackground': c.hoverPanelBackground,
      'list.inactiveSelectionBackground': c.lineBackground,
      'list.inactiveSelectionForeground': c.pointColor,
      'list.warningForeground': c.warningForeground,
      'menu.foreground': c.foreground,
      'menu.separatorBackground': c.border,
      'panel.border': c.border,
      'panelInput.border': c.border,
      'panelTitle.activeForeground': c.pointColor,
      'panelTitle.inactiveForeground': c.foreground,
      'scrollbar.shadow': c.border,
      'scrollbarSlider.activeBackground': c.pointColor,
      'scrollbarSlider.background': c.scrollbarForeground,
      'scrollbarSlider.hoverBackground': c.pointColor,
      'sideBar.background': c.background,
      'sideBar.border': c.border,
      'sideBarSectionHeader.background': c.background,
      'statusBar.background': c.background,
      'statusBar.debuggingBackground': c.pointColor,
      'statusBar.debuggingForeground': c.foreground,
      'statusBar.foreground': c.pointColor,
      'statusBar.noFolderBackground': c.pointColor,
      'statusBarItem.errorBackground': c.errorBackground,
      'statusBarItem.errorForeground': c.foreground,
      'statusBarItem.hoverBackground': c.pointColorBrighten,
      'statusBarItem.hoverForeground': c.foreground,
      'statusBarItem.remoteBackground': c.pointColor,
      'statusBarItem.remoteForeground': c.foreground,
      'tab.activeBackground': c.pointColorDarkenest,
      'tab.activeBorder': c.pointColor,
      'tab.activeForeground': c.foreground,
      'tab.border': c.background,
      'tab.inactiveBackground': c.background,
      'tab.inactiveForeground': c.foreground,
      'terminal.ansiWhite': c.foreground,
      'terminal.foreground': c.foreground,
      'terminalCursor.foreground': c.pointColor,
      'textCodeBlock.background': c.codeBackground,
      'titleBar.activeBackground': c.background,
      'titleBar.activeForeground': c.pointColor,
      'titleBar.inactiveBackground': c.background,
      'titleBar.inactiveForeground': c.pointColor,
      'tree.inactiveIndentGuidesStroke': c.background,
      'tree.indentGuidesStroke': c.border,
      'widget.border': c.background,
      'widget.shadow': c.shadow
    },
    tokenColors: [
      { name: '备注', scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: c.commentForeground, fontStyle: '' } },
      {
        name: '关键字',
        scope: [
          'keyword',
          'meta.selector',
          'markup.changed', // 关键字,meta,markup
          'keyword.operator.new', // new class
          'keyword.other.unsafe.rust' // rust
        ],
        settings: { foreground: c.keywordForeground }
      },
      {
        name: '关键字',
        scope: [
          'source.c keyword.operator',
          'source.cpp keyword.operator',
          'source.cs keyword.operator', // 关键字c,cpp,cs
          'source.elixir variable.definition',
          'source.elixir variable.anonymous', // elixir
          'source.go storage.type.string', // go
          'source.java keyword.operator.instanceof', // java
          'ng.attribute-with-value string', // ng
          'source.python keyword.operator.logical.python', // python
          'source.java keyword.operator.instanceof' // java
        ],
        settings: { foreground: c.keywordForeground }
      },
      { name: '关键字-ifelse,continue', scope: ['keyword.control'], settings: { foreground: c.keywordForeground } },
      {
        name: '变量',
        scope: [
          'source',
          'variable',
          'variable.parameter',
          'function.definition',
          'punctuation.definition.variable',
          'punctuation.definition.variable.php',
          'punctuation.definition.variable.shell',
          'variable.interpolation', // 属性
          'support.type.object.module',
          'support.type.object.module.js',
          'support.type.object.module.ts', // js模块属性,js对象属性
          'support.type.property-name',
          'support.type.property-name.json', // json属性
          'meta.object-literal.key',
          'meta.object-literal.key.js',
          'meta.object-literal.key.ts',
          'meta.definition.variable',
          'meta.function-call.arguments', // 方法调用中的参数
          'meta.tag.metadata', // html <>
          'entity.name.tag', // html标签
          'support.type.property-name.json punctuation' // json key
        ],
        settings: { foreground: c.variableForeground }
      },
      {
        name: '关键字-运算符',
        scope: [
          'keyword.operator',
          'meta.separator',
          'meta.tag',
          'meta.class.body',
          'meta.method-call',
          'meta.method', // 关键字-运算符,元分割符,元类主体,元方法调用
          'punctuation.definition.method-parameters',
          'punctuation.definition.function-parameters',
          'punctuation.definition.parameters',
          'punctuation.definition.separator',
          'punctuation.definition.seperator',
          'punctuation.definition.array',
          'punctuation.definition.class',
          'punctuation.definition.arguments.begin',
          'punctuation.definition.arguments.end', // 方法参数的标点
          'punctuation.separator',
          'punctuation.section.arguments', // 分割
          'punctuation.terminator.statement', // 分号
          'punctuation.section.block',
          'punctuation.section.class', // 大括号
          'punctuation.section.parens', //小括号
          'meta.object.member',
          'meta.objectliteral' // 括号,js冒号
        ],
        settings: { foreground: c.foreground }
      },
      { name: '方法名-系统', scope: ['support.function', 'keyword.other.special-method'], settings: { foreground: c.sysFunctionForeground } },
      {
        name: '方法名-自定义',
        scope: ['entity.name.function', 'support.function.any-method', 'entity.name.section', 'meta.function-call.generic'],
        settings: { foreground: c.functionForeground }
      },
      {
        name: '类',
        scope: [
          'entity.name',
          'entity.name.type',
          'entity.name.type.class',
          'entity.name.class',
          'support.class',
          'entity.other.inherited-class', // 类
          'source.java storage.modifier.import',
          'source.java storage.type' // java import,type
        ],
        settings: { foreground: c.classForeground }
      },
      { name: '字符串', scope: ['string'], settings: { foreground: c.pointColor } },
      {
        name: '字符串-正则,`${res}`',
        scope: [
          'string.regexp',
          'string.regexp keyword.operator',
          'string.regexp constant.character',
          'string.interpolated',
          'meta.template.expression.js punctuation.definition',
          'meta.template.expression.ts punctuation.definition'
        ],
        settings: { foreground: c.regexpForeground }
      },
      { name: '属性', scope: ['entity.other.attribute-name'], settings: { foreground: c.attributeForeground } },
      {
        name: '常量',
        scope: [
          'constant',
          'constant.character',
          'constant.numeric',
          'constant.language',
          'support.variable',
          'entity.name.function.decorator' // 方法上部@xxx
        ],
        settings: { foreground: c.constForeground }
      },
      {
        name: '双引号,单引号,属性名的字符',
        scope: ['string.quoted punctuation', 'string.quoted.double punctuation', 'string.quoted.single punctuation', 'source.json.comments'],
        settings: { foreground: c.pointColor }
      },
      { name: '存储', scope: ['storage', 'storage.type', 'storage.modifier.package', 'storage.modifier.import'], settings: { foreground: c.attributeForeground } },
      {
        name: '其他,标记中的引号,待加粗的,md的code',
        scope: ['keyword.other.unit', 'constant.other.color', 'constant.other.symbol', 'entity.other', 'markup.quote', 'punctuation.definition.bold', 'markup.bold', 'markup.inline.raw.string'],
        settings: { foreground: c.otherForeground }
      },
      { name: '加粗,md前两级标题,待加粗的', scope: ['heading.1', 'heading.2', 'punctuation.definition.bold', 'markup.bold'], settings: { fontStyle: 'bold' } }
    ]
  }
}
module.exports = { getConfig }
