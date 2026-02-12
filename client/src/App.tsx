import React, { useState } from 'react';

export default function App() {
  const [journalText, setJournalText] = useState('');
  const [previousJournals, setPreviousJournals] = useState([
    { id: 1, preview: 'Today was a good day...', date: '2024-02-10' },
    { id: 2, preview: 'Feeling grateful for...', date: '2024-02-09' },
    { id: 3, preview: 'Thoughts on productivity...', date: '2024-02-08' }
  ]);

  const handleSave = () => {
    if (journalText.trim()) {
      const newJournal = {
        id: Date.now(),
        preview: journalText.substring(0, 50) + '...',
        date: new Date().toISOString().split('T')[0]
      };
      setPreviousJournals([newJournal, ...previousJournals]);
      setJournalText('');
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-light mb-12 text-gray-800">Journalify</h1>

        {/* Main Journal Input */}
        <div className="mb-12">
          <textarea
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
            placeholder="what's on your mind"
            className="w-full h-64 p-6 border-2 border-gray-300 rounded-3xl text-lg resize-none focus:outline-none focus:border-gray-400"
          />
          <button
            onClick={handleSave}
            className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
          >
            Save Entry
          </button>
        </div>

        {/* Previous Journals Grid */}
        <div className="grid grid-cols-3 gap-6">
          {previousJournals.map((journal) => (
            <div
              key={journal.id}
              className="border-2 border-gray-300 rounded-3xl p-6 h-48 cursor-pointer hover:border-gray-400 transition-colors"
            >
              <p className="text-sm text-gray-500 mb-2">{journal.date}</p>
              <p className="text-gray-800">{journal.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}