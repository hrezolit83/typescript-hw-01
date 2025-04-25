type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(updatedValues: Partial<User>) {
  // Оновлення користувача
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...initialValues, ...updatedValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
