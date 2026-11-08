
const STUDENT_EMAIL = "230408045@st.biruni.edu.tr";
const DEMO_PASSWORD = "demo123456";

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === STUDENT_EMAIL && password === DEMO_PASSWORD) {
        resolve({ username });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 500);
  });
}
