batavia.modules.RegExp = {
    __doc__: "",
    __file__: "RegExp.js",
    __name__: "RegExp",
    __package__: "",

    RegExp: function(pattern, flags) {
        if (!batavia.isinstance(pattern, batavia.types.Str)) {
            throw new batavia.builtins.TypeError('pattern must be a string');
        } else if (!batavia.isinstance(flags, batavia.types.Str) && flags !== undefined) {
            throw new batavia.builtins.TypeError('flags must be a string, when given');
        }
        var obj = RegExp(pattern, flags);
        this.flags = new batavia.types.Str(flags);
        this.source = new batavia.types.Str(pattern);
        this.global = new batavia.types.Bool(obj.global);
        this.ignoreCase = new batavia.types.Bool(obj.ignoreCase);
        this.multiline = new batavia.types.Bool(obj.multiline);
        this.sticky = new batavia.types.Bool(obj.sticky);
        this.unicode = new batavia.types.Bool(obj.unicode);

        this.exec = function (str) {
            if (!batavia.isinstance(str, batavia.types.Str)) {
                throw new batavia.builtins.TypeError('a string is required');
            }
            var result = obj.exec(str);
            if (result === null) {
                return batavia.builtins.None;
            } else {
                return new batavia.types.List(result.map(function(value) {
                    return new batavia.types.Str(value);
                }));
            }
        };

        this.test = function (str) {
            if (!batavia.isinstance(str, batavia.types.Str)) {
                throw new batavia.builtins.TypeError('a string is required');
            }
            return new batavia.types.Bool(obj.test(str));
        };

        // TODO: replace

        this.search = function (str) {
            if (!batavia.isinstance(str, batavia.types.Str)) {
                throw new batavia.builtins.TypeError('a string is required');
            }
            return new batavia.types.Int(str.search(obj));
        };

        this.split = function (str, limit) {
            if (!batavia.isinstance(str, batavia.types.Str)) {
                throw new batavia.builtins.TypeError('a string is required');
            } else if (!batavia.isinstance(limit, batavia.types.Int) && limit !== undefined) {
                throw new batavia.builtins.TypeError('limit must be an integer, when given');
            }
            return new batavia.types.List(str.split(obj, limit).map(function(value) {
                return new batavia.types.Str(value);
            }));
        };

        return this;
    }
};
