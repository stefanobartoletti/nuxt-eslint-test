export const useGreetTs = (name: string) => {
    const greeting = `Hello ${name || 'there'}, this is TypeScript!`

    return greeting
}