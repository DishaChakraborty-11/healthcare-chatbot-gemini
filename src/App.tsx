import React from "react"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* ✅ LOGO IMAGE */}
      <img
        src="/healthcare.jpg"
        alt="Pharma Chat Logo"
        className="h-24 w-auto mb-4"
      />

      {/* ✅ TITLE */}
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Pharma Chat
      </h1>

      {/* ✅ SUBTITLE */}
      <p className="text-md text-gray-500 text-center">
        Your Healthcare Consultation Assistant
      </p>
    </div>
  )
}

export default App
