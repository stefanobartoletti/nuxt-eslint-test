export const useGreetTs = (name: String) => {
    const greeting = `Hello ${name || 'there'}, this is TypeScript!`

    return greeting
}