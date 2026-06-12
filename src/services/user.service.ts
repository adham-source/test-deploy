import User from '../models/User';

export const createUser = async (userData: { username: string; email: string; password: string }) => {
    const user = new User(userData);
    return await user.save();
};

export const getUserByEmail = async (email: string) => {
    return await User.findOne({ email });
};

export const getUserById = async (id: string) => {
    return await User.findById(id);
};

export const updateUser = async (id: string, updateData: Partial<{ username: string; email: string; password: string }>) => {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteUser = async (id: string) => {
    return await User.findByIdAndDelete(id);
};  