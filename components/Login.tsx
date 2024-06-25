export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 lg:p-12 w-full z-50">
      <div className="flex flex-col items-center w-full max-w-md bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-4">Login to Your Account</h2>
        <form className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember_me"
                className="h-4 w-4 text-blue-1 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-1 hover:text-blue-1">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-2 text-white px-4 py-2 rounded-full hover:bg-blue-1"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-blue-1 hover:text-blue-1">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
