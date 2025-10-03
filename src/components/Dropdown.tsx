'use client';

import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  value: string;
  label: string;
  color: string;
}

interface DropdownProps {
  options: DropdownOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  placeholder: string;
  icon: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onSelect,
  placeholder,
  icon,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(option => option.value === selectedValue);

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100',
      yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100',
      green: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
      blue: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
      purple: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
      gray: 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100';
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className={`w-full px-4 py-3 text-left bg-white border-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between ${
          selectedOption ? getColorClasses(selectedOption.color) : 'border-gray-200 text-gray-500'
        } ${isOpen ? 'ring-2 ring-blue-500 border-blue-500' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <span className="text-xl">{icon}</span>
          <span className="font-medium">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          <div className="py-1">
            <button
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-3 ${
                !selectedValue ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
              }`}
              onClick={() => {
                onSelect('');
                setIsOpen(false);
              }}
            >
              <span className="text-xl">🔄</span>
              <span className="font-medium">All Options</span>
            </button>
            {options.map((option) => (
              <button
                key={option.value}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-3 ${
                  selectedValue === option.value ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => {
                  onSelect(option.value);
                  setIsOpen(false);
                }}
              >
                <span className="text-xl">
                  {option.color === 'red' ? '🔴' : 
                   option.color === 'yellow' ? '🟡' : 
                   option.color === 'green' ? '🟢' : 
                   option.color === 'blue' ? '🔵' : 
                   option.color === 'purple' ? '🟣' : '⚪'}
                </span>
                <span className="font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
