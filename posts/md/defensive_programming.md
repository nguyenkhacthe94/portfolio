# The Art of Software Design - Defensive Programming
May 21, 2025

Programming is an art, and the programmer is an artist.

Someone said that, not me. But we have to admit that programmers have many things to weigh and measure when designing a real product. And "Defense" is one of those factors.

So what are we "defending" against? Who is attacking? How do we defend? Let's walk through this together to answer these questions.

## 1. Defending against Bad Input
As the name suggests, "Bad input" is data entered poorly, whether intentionally or unintentionally. For example, someone might purposefully add a single quote (`'`) or `<script>` tag into the input sent to our system. Then suddenly one day, a "strange" session connects to our database with the highest privileges (system admin), or an important table vanishes without a trace. "Hackers" out there are as common as roasted peanuts in a beer hall.

So how do we defend?

*   **Validation**: Always check input data from "users" before saving it to the system. We (or the system) can't know if that "user" is a real person or some "friend" from a strange land trying to tamper with our data (until we get called out for data loss, or worse, a database crash). Better safe than sorry.
*   **ReGex**: For data types with special patterns (UUID, Phone numbers, email...), use regex to ensure the data doesn't contain "dangerous" elements.
*   **Whitelisting**: If your service doesn't need to "communicate" with everyone except a specific beloved service, turn on Whitelist mode for that service instead of trying to Blacklist huge IP ranges. We aren't that free :D

## 2. Safe landing for all exceptions/errors
Imagine a beautiful day when a user sends a weird request. The system throws an unhandled exception. And then the backend "crashes". Everything stops, except your phone receiving hundreds of messages and ringing constantly with calls from subordinates, superiors, clients... That's an occupational accident, folks.

So to ensure "safety is a friend" and minimize bad luck, here are some ways to ensure the system "lands" safely even if it encounters exceptions or problems:

*   **Ensure all exceptions are handled**: Try-catch, if-else, validation... We have many ways to prevent and handle exceptions; no exception should be allowed to stop your system.
*   **Customize error messages**: Error messages displayed to the end user should contain just enough information, instead of a long stack trace like a supermarket queue. Innocent users find it ugly, but a "colleague" on the other side of the battle line could use that stack trace to attack us back.
*   **Always have a backup plan**: If one beautiful day, our system can't "parry" a critical attack, at least there's a "shoulder" to lean on: backup. If the system crashes, it crashes, but at least customer data is still there, so our heads are still on our necks.
*   **Absolutely avoid "unsafe landings" (hard crashes)**: Sometimes our system has to wait for another service indefinitely. Waiting isn't always happiness, so proactively **Timeout** when waiting too long. For static resources, proactively check for existence before "trying" to read the file. And finally, regularly check memory to avoid memory leaks and overflows.

## 3. Always grasp the "destiny" of the system
Fancy words aside, simply put: know the system's state in the past and present. Manual is fine, automated is better. For example:

*   **Automation test**: A mechanism to help us set up "strict" cases, and let the CI pipeline check them every time new code is uploaded. By continuously checking edge cases automatically, we reduce cases that can cause problems. This is also how to ensure a problem that happened once won't happen again, by adding it to the test case.
*   **Logging**: "Those who turn their backs on history will have to face it again". Logging is the history of the system, so it should help us know who did what. Ensure your log files have enough info to easily trace backwards. Having an automatic alert tool on these logs is even better :D

A "delicious" product will eventually attract prying eyes. After you put your product "on the floor", it needs to "stand firm" against the waves out there. Wishing you, and your products, always have "hard legs and soft stones" (resilience), and peace in all things. You can subscribe to my newsletter to "catch" my next posts.
