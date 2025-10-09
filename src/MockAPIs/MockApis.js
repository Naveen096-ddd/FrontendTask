const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'manager', password: 'manager123', role: 'Manager' },
  { username: 'user', password: 'user123', role: 'student' },
  {username: 'naveen',password: "naveen@123", role: 'admin'}
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
