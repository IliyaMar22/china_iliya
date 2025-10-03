'use client';

import React, { useState } from 'react';
import { EVData } from '@/data/evData';
import EVCard from './EVCard';

interface ResultsSectionProps {
  filteredEVs: EVData[];
  recommendedEV: EVData | null;
  selectedCriteria: {
    price?: string;
    battery?: string;
    horsepower?: string;
  };
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ 
  filteredEVs, 
  recommendedEV, 
  selectedCriteria 
}) => {
  const [sortBy, setSortBy] = useState<'performance' | 'price' | 'horsepower'>('performance');
  const hasActiveFilters = Object.values(selectedCriteria).some(value => value !== undefined);
  
  const sortedEVs = [...filteredEVs].sort((a, b) => {
    switch (sortBy) {
      case 'performance':
        return b.performance_score - a.performance_score;
      case 'price':
        return a.price - b.price;
      case 'horsepower':
        return b.horsepower - a.horsepower;
      default:
        return 0;
    }
  });

  return (
    <div id="results" className="space-y-6 md:space-y-8">
      {/* Results Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-4">
          <span className="text-2xl">🎯</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
          {hasActiveFilters ? 'Your Perfect Matches' : 'All Chinese EVs'}
        </h2>
        <p className="text-gray-600 text-sm md:text-xl mb-6 max-w-2xl mx-auto">
          {hasActiveFilters 
            ? `Found ${filteredEVs.length} vehicle${filteredEVs.length !== 1 ? 's' : ''} matching your criteria`
            : 'Explore our complete collection of premium Chinese electric vehicles'
          }
        </p>
      </div>

      {/* Sort Controls */}
      {filteredEVs.length > 1 && (
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-700">Sort by:</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'performance', label: 'Performance', icon: '⚡' },
                { value: 'price', label: 'Price', icon: '💰' },
                { value: 'horsepower', label: 'Power', icon: '🚀' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value as 'performance' | 'price' | 'horsepower')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    sortBy === option.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{option.icon}</span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recommended Vehicle */}
      {recommendedEV && hasActiveFilters && (
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">⭐</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Top Recommendation</h3>
          </div>
          <div className="max-w-2xl mx-auto">
            <EVCard ev={recommendedEV} isRecommended={true} />
          </div>
        </div>
      )}

      {/* All Results */}
      {sortedEVs.length > 0 ? (
        <div>
          {hasActiveFilters && recommendedEV && (
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🔍</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">All Matching Vehicles</h3>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedEVs.map((ev) => (
              <EVCard 
                key={ev.id} 
                ev={ev} 
                isRecommended={recommendedEV?.id === ev.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 md:py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
            <span className="text-4xl">🔍</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            No vehicles found
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Try adjusting your criteria to see more results
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 max-w-md mx-auto">
            <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
              <span className="mr-2">💡</span>
              Tips:
            </h4>
            <ul className="text-yellow-700 text-left space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Try selecting fewer criteria
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Choose broader price ranges
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Consider different battery sizes
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Statistics */}
      {filteredEVs.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 mt-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">📊</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">Quick Statistics</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                {filteredEVs.length}
              </div>
              <div className="text-gray-600 text-sm">Total Vehicles</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                ${Math.round(filteredEVs.reduce((sum, ev) => sum + ev.price, 0) / filteredEVs.length).toLocaleString()}
              </div>
              <div className="text-gray-600 text-sm">Avg. Price</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                {Math.round(filteredEVs.reduce((sum, ev) => sum + ev.horsepower, 0) / filteredEVs.length)}
              </div>
              <div className="text-gray-600 text-sm">Avg. HP</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">
                {Math.round(filteredEVs.reduce((sum, ev) => sum + ev.battery_capacity, 0) / filteredEVs.length)}
              </div>
              <div className="text-gray-600 text-sm">Avg. Battery</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsSection;