# How I Use Codegen LLMs to Build Projects

February 23, 2025

## Step 1: Honing the Idea

I use a chatbot-style AI (ChatGPT o3 mini) for this step with the following prompt:

> Ask me one question at a time so we can develop a thorough, step-by-step spec for this idea. Each question should build on my previous answers, and our end goal is to have a detailed specification I can hand off to a developer. Let’s do this iteratively and dig into every relevant detail. Remember, only one question at a time.
> 
> Here’s the idea:
> 
> <IDEA>

The AI will ask you continuous questions about different aspects of the project, desired features, and any requirements you want to incorporate. After this Q&A process, the following prompt will help you generate a detailed project plan:

> Now that we’ve wrapped up the brainstorming process, can you compile our findings into a comprehensive, developer-ready specification? Include all relevant requirements, architecture choices, data handling details, error handling strategies, and a testing plan so a developer can immediately begin implementation.

## Step 2: Planning the plan

Take the spec above and feed it into a model strong in reasoning (o1*, o3*, r1). Here, I split the process into two prompts depending on whether you want tests included with the code or not.

### With Tests:

> Draft a detailed, step-by-step blueprint for building this project. Then, once you have a solid plan, break it down into small, iterative chunks that build on each other. Look at these chunks and then go another round to break it into small steps. Review the results and make sure that the steps are small enough to be implemented safely with strong testing, but big enough to move the project forward. Iterate until you feel that the steps are right sized for this project.
> 
> From here you should have the foundation to provide a series of prompts for a code-generation LLM that will implement each step in a test-driven manner. Prioritize best practices, incremental progress, and early testing, ensuring no big jumps in complexity at any stage. Make sure that each prompt builds on the previous prompts, and ends with wiring things together. There should be no hanging or orphaned code that isn't integrated into a previous step.
> 
> Make sure and separate each prompt section. Use markdown. Each prompt should be tagged as text using code tags. The goal is to output prompts, but context, etc is important as well.
> 
> <SPEC>

### Without Tests:

> Draft a detailed, step-by-step blueprint for building this project. Then, once you have a solid plan, break it down into small, iterative chunks that build on each other. Look at these chunks and then go another round to break it into small steps. review the results and make sure that the steps are small enough to be implemented safely, but big enough to move the project forward. Iterate until you feel that the steps are right sized for this project.
> 
> From here you should have the foundation to provide a series of prompts for a code-generation LLM that will implement each step. Prioritize best practices, and incremental progress, ensuring no big jumps in complexity at any stage. Make sure that each prompt builds on the previous prompts, and ends with wiring things together. There should be no hanging or orphaned code that isn't integrated into a previous step.
> 
> Make sure and separate each prompt section. Use markdown. Each prompt should be tagged as text using code tags. The goal is to output prompts, but context, etc is important as well.
> 
> <SPEC>

You can save the result as a markdown file to feed into a codegen model that supports markdown formatting.

Additionally, I like to create a todo.md file to track progress:

> Can you make a `todo.md` that I can use as a checklist? Be thorough.

This entire process will take maybe 15 minutes. It is pretty quick. And there are so many options available for execution. The success really depends on how well step 2 went. You can use github workspace, aider, cursor, claude... Anything you want.

With this approach, you can quickly turn many ideas into projects. Plus, you get to experiment with the role of a "project manager," coordinating different agents. Worth a try, right?
