

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Eph Mesfin. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/oneshotefa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8a9.56 9.56 0 012.5.34c1.9-1.29 2.74-1.02 2.74-1.02.56 1.39.21 2.41.1 2.67.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/ephrem-Mesfin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.3c-.84 0-1.5-.68-1.5-1.5s.66-1.5 1.5-1.5c.84 0 1.5.68 1.5 1.5s-.66 1.5-1.5 1.5zm13 10.3h-2.5v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-2.5v-9h2.5v1.3c.7-1.1 3-1.2 3 1.1v6.6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
