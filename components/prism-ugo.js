Prism.languages.ugo = Prism.languages.extend('clike', {
	'keyword': /\b(?:break|continue|else|for|func|if|import|return|var|param|global|try|catch|finally|throw|in|undefined)\b/,
	'builtin': /\b(?:bool|bytes|error|float|chars?|string|u?int|append|copy|delete|len|printf?(?:ln)?|sort|sortReverse|repeat|contains|typeName|sprintf|isError|isInt|isUint|isFloat|isChar|isBool|isString|isBytes|isMap|isSyncMap|isArray|isUndefined|isFunction|isCallable|isIterable|WrongNumArgumentsError|InvalidOperatorError|IndexOutOfBoundsError|NotIterableError|NotIndexableError|NotIndexAssignableError|NotCallableError|NotImplementedError|ZeroDivisionError|TypeError)\b/,
	'boolean': /\b(?:_|true|false)\b/,
	'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
	'number': /(?:\b0x[a-f\d]+|(?:\b\d+u?\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
	'string': {
		pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
		greedy: true
	}
});
delete Prism.languages.ugo['class-name'];
