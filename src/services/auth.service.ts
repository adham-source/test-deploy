import User, { IUser } from '../models/User';

class AuthService {
    public async register(userData: { username: string; email: string; password: string }): Promise<IUser> {
        const user = new User(userData);
        return await user.save();
    }

    public async login(email: string, password: string): Promise<IUser | null> {
        const user = await User.findOne({ email });
        if (user && user.password === password) {
            return user;
        }
        return null;
    }
}

export default new AuthService();
