import React, { useState } from 'react';

const TrafficPage = () => {
  const [event, setEvent] = useState('');
  const [verifiedBy, setVerifiedBy] = useState('');
  const [duration, setDuration] = useState('Open');
  const [reports, setReports] = useState([]); // Store submitted reports

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReport = {
      event,
      verifiedBy,
      duration,
      time: new Date().toLocaleString(), // Add timestamp
    };

    // Add to reports list
    setReports([newReport, ...reports]);

    // Reset form
    setEvent('');
    setVerifiedBy('');
    setDuration('Open');
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Traffic Event Reporting</h1>

      {/* Form */}
      <form
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block mb-2 font-semibold">Event Description:</label>
          <input
            type="text"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Verified By:</label>
          <input
            type="text"
            value={verifiedBy}
            onChange={(e) => setVerifiedBy(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Duration:</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Report
        </button>
      </form>

      {/* Reports Display */}
      <div className="mt-12 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Reported Traffic Events:</h2>
        {reports.length === 0 ? (
          <p className="text-gray-600">No reports yet!</p>
        ) : (
          <ul className="space-y-4">
            {reports.map((report, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">{report.event}</p>
                  <p className="text-sm text-gray-600">Verified by: {report.verifiedBy}</p>
                  <p className="text-sm">Status: <span className={`font-semibold ${report.duration === 'Open' ? 'text-green-600' : 'text-red-600'}`}>{report.duration}</span></p>
                  <p className="text-xs text-gray-400">{report.time}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TrafficPage;
