# AI Development Workflow Comparison

## Round 1: Vague Prompt

For Round 1, I used a single vague prompt: "Build a settings form with validation for my project." I accepted the generated implementation and manually tested the form. This approach was quick, but it gave the AI limited context about the exact requirements, accessibility expectations, edge cases, and verification process.

## Round 2: Precise Prompt

For Round 2, I used a detailed prompt that required the AI to inspect the project, make a plan, implement specific validation behavior, consider accessibility, handle edge cases, and write and run tests. The resulting implementation separated validation into `form-validation.js` and added `form-validation.test.js`. The tests covered empty name, empty email, invalid email, and valid input cases. The form also used accessibility attributes such as `aria-describedby`, `aria-invalid`, and status/error roles.

## Comparison

The main difference was the level of control and verification. Round 1 produced a working form quickly, but the result depended more heavily on manual review. Round 2 produced a more structured implementation with separate validation logic and automated tests. The precise prompt also made the expected behavior explicit, which reduced ambiguity and made the result easier to review.

The Round 2 approach required more upfront prompting, but it reduced review effort by making requirements and verification explicit. The automated tests also provided repeatable checks for important validation cases.

One limitation I identified in the AI-generated work was that I still needed to manually test the actual browser behavior. Automated tests checked the validation logic, but they did not replace checking the real form, keyboard navigation, and responsive behavior.

## Conclusion

For future features, I will use the Round 2 workflow: inspect the project, make a plan, give clear requirements and constraints, implement the feature, test edge cases, review accessibility, and verify the result before considering the task complete.