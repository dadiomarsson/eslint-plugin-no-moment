module.exports = {
    create(context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value === 'moment') {
                    context.report({
                        node,
                        message: 'The use of moment is forbidden. Use date-fns instead.',
                    });
                }
            }
        }
    }
};