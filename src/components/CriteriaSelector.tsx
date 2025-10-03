'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { criteriaOptions } from '@/data/evData';
import { cn } from '@/lib/utils';
import { Filter, X, Search } from 'lucide-react';

interface CriteriaSelectorProps {
  selectedCriteria: {
    price?: string;
    battery?: string;
    horsepower?: string;
  };
  onCriteriaChange: (criteria: { price?: string; battery?: string; horsepower?: string }) => void;
}

const CriteriaSelector: React.FC<CriteriaSelectorProps> = ({ selectedCriteria, onCriteriaChange }) => {
  const handleChange = (type: 'price' | 'battery' | 'horsepower', value: string) => {
    onCriteriaChange({
      ...selectedCriteria,
      [type]: value || undefined
    });
  };

  const clearAll = () => {
    onCriteriaChange({});
  };

  const hasActiveFilters = Object.values(selectedCriteria).some(value => value !== undefined);

  const getIcon = (type: string) => {
    switch (type) {
      case 'price': return '💰';
      case 'battery': return '🔋';
      case 'horsepower': return '⚡';
      default: return '🔍';
    }
  };

  const getColor = (option: any) => {
    const colorMap = {
      red: 'text-red-600',
      yellow: 'text-yellow-600',
      green: 'text-green-600',
      blue: 'text-blue-600',
      purple: 'text-purple-600'
    };
    return colorMap[option.color as keyof typeof colorMap] || 'text-gray-600';
  };

  return (
    <Card className="w-full shadow-lg border-0 bg-gradient-to-br from-white to-blue-50/30">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
          <Filter className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Find Your Perfect Chinese EV
        </CardTitle>
        <CardDescription className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Select your preferences and discover the ideal electric vehicle for your lifestyle
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Dropdowns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Price Range */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <span className="text-lg">{getIcon('price')}</span>
              Price Range
            </label>
            <Select
              value={selectedCriteria.price || 'all'}
              onValueChange={(value) => handleChange('price', value === 'all' ? '' : value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Price Ranges</SelectItem>
                {criteriaOptions.price.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      <span className={cn("text-sm", getColor(option))}>
                        {option.color === 'red' ? '🔴' : 
                         option.color === 'yellow' ? '🟡' : 
                         option.color === 'green' ? '🟢' : 
                         option.color === 'blue' ? '🔵' : 
                         option.color === 'purple' ? '🟣' : '⚪'}
                      </span>
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Battery Capacity */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <span className="text-lg">{getIcon('battery')}</span>
              Battery Capacity
            </label>
            <Select
              value={selectedCriteria.battery || 'all'}
              onValueChange={(value) => handleChange('battery', value === 'all' ? '' : value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select battery size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Battery Sizes</SelectItem>
                {criteriaOptions.battery.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      <span className={cn("text-sm", getColor(option))}>
                        {option.color === 'red' ? '🔴' : 
                         option.color === 'yellow' ? '🟡' : 
                         option.color === 'green' ? '🟢' : 
                         option.color === 'blue' ? '🔵' : 
                         option.color === 'purple' ? '🟣' : '⚪'}
                      </span>
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Horsepower */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <span className="text-lg">{getIcon('horsepower')}</span>
              Horsepower
            </label>
            <Select
              value={selectedCriteria.horsepower || 'all'}
              onValueChange={(value) => handleChange('horsepower', value === 'all' ? '' : value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select power level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Power Levels</SelectItem>
                {criteriaOptions.horsepower.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      <span className={cn("text-sm", getColor(option))}>
                        {option.color === 'red' ? '🔴' : 
                         option.color === 'yellow' ? '🟡' : 
                         option.color === 'green' ? '🟢' : 
                         option.color === 'blue' ? '🔵' : 
                         option.color === 'purple' ? '🟣' : '⚪'}
                      </span>
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          {hasActiveFilters && (
            <Button
              onClick={clearAll}
              variant="outline"
              className="flex-1"
            >
              <X className="w-4 h-4 mr-2" />
              Clear All Filters
            </Button>
          )}
          
          <Button
            onClick={() => {
              const resultsElement = document.getElementById('results');
              if (resultsElement) {
                resultsElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            variant="gradient"
            className="flex-1"
          >
            <Search className="w-4 h-4 mr-2" />
            View Results
          </Button>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="pt-4 border-t border-border">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Active Filters:
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedCriteria.price && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  <span className="mr-1">💰</span>
                  {criteriaOptions.price.find(opt => opt.value === selectedCriteria.price)?.label}
                  <button
                    onClick={() => handleChange('price', '')}
                    className="ml-2 hover:text-blue-600 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              {selectedCriteria.battery && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                  <span className="mr-1">🔋</span>
                  {criteriaOptions.battery.find(opt => opt.value === selectedCriteria.battery)?.label}
                  <button
                    onClick={() => handleChange('battery', '')}
                    className="ml-2 hover:text-green-600 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              {selectedCriteria.horsepower && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
                  <span className="mr-1">⚡</span>
                  {criteriaOptions.horsepower.find(opt => opt.value === selectedCriteria.horsepower)?.label}
                  <button
                    onClick={() => handleChange('horsepower', '')}
                    className="ml-2 hover:text-purple-600 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CriteriaSelector;