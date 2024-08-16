


class UserService {
    async hola(data: { name: string, lastname: string, age: number }): Promise<string> {
        const { name, lastname, age } = data;
        const result = `${name} ${lastname} hola, tu edad es ${age}`
        return result;
    }
}

export default new UserService();