'use client';

import React, { useState, useEffect } from 'react';
import CriteriaSelector from '@/components/CriteriaSelector';
import ResultsSection from '@/components/ResultsSection';
import { filterEVs, getRecommendation } from '@/data/evData';

export default function Home() {
  const [selectedCriteria, setSelectedCriteria] = useState<{
    price?: string;
    battery?: string;
    horsepower?: string;
  }>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredEVs = filterEVs(selectedCriteria);
  const recommendedEV = getRecommendation(selectedCriteria);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-3 md:mb-4">
              <span className="text-xl md:text-2xl">🚗</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
              Chinese EV Analyzer
            </h1>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover the perfect Chinese electric vehicle for your needs. 
              Compare performance, battery capacity, and price to find your ideal EV.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        {/* Criteria Selection */}
        <CriteriaSelector
          selectedCriteria={selectedCriteria}
          onCriteriaChange={setSelectedCriteria}
        />

        {/* Results */}
        <ResultsSection
          filteredEVs={filteredEVs}
          recommendedEV={recommendedEV}
          selectedCriteria={selectedCriteria}
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
              <span className="text-xl">🚗</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Chinese EV Analyzer</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Your trusted source for comparing Chinese electric vehicles. 
              Find the perfect EV that matches your budget, performance needs, and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs md:text-sm text-gray-400">
              <span>© 2024 Chinese EV Analyzer</span>
              <span className="hidden sm:inline">•</span>
              <span>Data sourced from official manufacturers</span>
              <span className="hidden sm:inline">•</span>
              <span>Last updated: December 2024</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}