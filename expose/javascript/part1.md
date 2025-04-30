1. Line 9 prints: values added: 20
2. Line 13 prints: final result: 20
3. You should not use var because it is function-scoped. That means it can be accessed anywhere in function it is defined in, so that could lead to naming conflicts and scoping issues.
4. Line 9 prints: values added: 20
5. Line 13 returns an error because let is block-scoped. That means only the block that the variable was declared in can access it. Since line 13 calls result outside of it's declaration block, an error is returned.
6. The code returns an error before line 9 is reached. Line 7 tries to reassign a const variable, which causes an error and stops the rest of the function from running.
7. The code returns an error before line 13 is reached. Line 7 tries to reassign a const variable, which causes an error and stops the rest of the function from running.