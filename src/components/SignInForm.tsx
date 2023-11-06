import { Link } from "react-router-dom";
import "./SignInForm.css";
import { z } from "zod";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  email: z.string().min(5),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

interface Props {
  navToSignIn: string;
  navToSignUp: string;
}

const SignInForm = ({ navToSignIn, navToSignUp }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form className="body" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="text"
          className="form-control"
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}

        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          {...register("password")}
          id="password"
          type="password"
          className="form-control"
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
        <div className="btn-body">
          <Link to={isValid ? "/" + navToSignIn : "/SignInOut"}>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!isValid}
            >
              Sign in
            </button>
          </Link>
          <Link to={isValid ? "/" + navToSignUp : "/SignInOut"}>
            <button
              className="btn btn-success"
              type="submit"
              disabled={!isValid}
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
