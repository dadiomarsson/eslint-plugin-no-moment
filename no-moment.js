module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Moment library is not allowed',
            category: 'Best Practices',
            recommended: true
        },
        schema: [],
        messages: {
            noMomentLib: 'Moment library is not allowed'
        }
    },
    create(context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value === 'moment') {
                    context.report({
                        node,
                        message: 'The use of moment is forbidden. Use date-fns instead.',
                    });
                }
            },
            CallExpression(node) {
                if (node.callee.name === 'require' && node.arguments[0].value === 'moment') {
                    context.report({
                        node,
                        message: 'The use of moment is forbidden. Use date-fns instead.',
                    });
                }
            }
        }
    }
};
