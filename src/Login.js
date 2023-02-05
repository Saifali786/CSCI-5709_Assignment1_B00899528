import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import FormHelperText from "@mui/material/FormHelperText";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  let errorFlag = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const formValue = {
      email,
      password,
    };
    setError(validateForm(formValue));
    if (errorFlag === 0) {
      alert("User authenticated");
      setEmail("");
      setPassword("");
    } else {
      alert("Incorrect email/password");
    }
  };

  const validateForm = (data) => {
    const errorMessage = {};
    if (data.email === "") {
      errorFlag = 1;
      errorMessage.email = "Email is not valid";
    } else if (data.password.length < 8) {
      errorFlag = 1;
      errorMessage.password = "Password must be more than 8 characters";
    } else {
      errorFlag = 0;
    }
    return errorMessage;
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "30rem", height: "25rem" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <div style={{ textAlign: "left" }}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onSubmit={handleSubmit}
                    required
                  />
                </Form.Group>
                <div className="error" style={{ color: "red" }}>
                  {" "}
                  {error.email}{" "}
                </div>
              </div>
              <div style={{ textAlign: "left" }}>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onSubmit={handleSubmit}
                    required
                  />
                </Form.Group>
                {error && (
                  <div className="error" style={{ color: "red" }}>
                    {" "}
                    {error.password}{" "}
                  </div>
                )}
              </div>
              <div
                className="w-100 text-right mt -2"
                style={{ textAlign: "right", marginTop: "10px" }}
              >
                <a href="#"> Forgot Password</a>
              </div>
              <Button style={{ marginTop: "30px" }} type="submit">
                Log In
              </Button>
            </Form>
            <div
              className="w-100 text-right mt -2"
              style={{ marginTop: "20px" }}
            >
              Not Registered? <a href="#"> Signup</a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
