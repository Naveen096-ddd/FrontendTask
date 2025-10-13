const users = [
  { username: 'admin@12', password: 'admin123', role: 'admin' },
  { username: 'manager@12', password: 'manager123', role: 'Manager' },
  { username: 'user@12', password: 'user123', role: 'student' },
  {username: 'naveen@12',password: "naveen@123", role: 'admin'}
];

export const mockLogin = (username, password, role) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundUser = users.find(
        (user) => user.username === username && user.password === password || user.role === role);
      if (foundUser) {
        resolve({
          success: true,
          role: foundUser.role,
          token: `fake-token-${foundUser.role}`
        });
      } else {
        reject({
          success: false,
          message: 'Invalid credentials'
        });
      }
    }, 1000);
  });
};
