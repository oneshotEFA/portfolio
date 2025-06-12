

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-900 py-20 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Let's Work Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Ready to bring your ideas to life
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold">Get In Touch</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">efa.traww21@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">💼</span>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    linkedin.com/in/ephrem-Mesfin
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">🐙</span>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    github.com/oneshotefa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
