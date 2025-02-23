import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { db } from '../firebase';
import googleLogo from '../assets/google-logo.png'; // Ensure you have the Google logo in your assets folder

const Register = () => {
  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User Info:', result.user);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <MapPin className="h-12 w-12 text-indigo-600 mx-auto" />
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="bg-white py-8 px-4 shadow-md rounded-lg sm:px-10">
        <form className="space-y-6">
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="full-name"
              name="full-name"
              type="text"
              autoComplete="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="password-confirm"
              name="password-confirm"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100"
          >
            <img src={googleLogo} alt="Google Logo" className="h-5 w-5 mr-2" />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
