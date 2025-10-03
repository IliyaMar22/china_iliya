'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EVData } from '@/data/evData';
import { cn, formatPrice } from '@/lib/utils';
import { ExternalLink, Heart, BarChart3, ChevronDown, ChevronUp, Star } from 'lucide-react';

interface EVCardProps {
  ev: EVData;
  isRecommended?: boolean;
}

const EVCard: React.FC<EVCardProps> = ({ ev, isRecommended = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const getCategoryColor = (category: string) => {
    const colorMap = {
      budget: 'bg-green-100 text-green-800 border-green-300',
      moderate: 'bg-blue-100 text-blue-800 border-blue-300',
      luxury: 'bg-purple-100 text-purple-800 border-purple-300'
    };
    return colorMap[category as keyof typeof colorMap] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const getBatteryColor = (category: string) => {
    const colorMap = {
      low: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-green-100 text-green-800'
    };
    return colorMap[category as keyof typeof colorMap] || 'bg-gray-100 text-gray-800';
  };

  const getHorsepowerColor = (category: string) => {
    const colorMap = {
      low: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-blue-100 text-blue-800',
      extreme: 'bg-purple-100 text-purple-800'
    };
    return colorMap[category as keyof typeof colorMap] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      isRecommended && "ring-2 ring-yellow-400 ring-offset-2"
    )}>
      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-2 z-10">
          <div className="flex items-center justify-center gap-2 font-bold text-sm">
            <Star className="w-4 h-4" />
            RECOMMENDED FOR YOU
          </div>
        </div>
      )}
      
      <CardHeader className={cn("pb-4", isRecommended && "pt-12")}>
        <div className="flex justify-between items-start">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-1 truncate">
              {ev.name}
            </CardTitle>
            <CardDescription className="text-sm md:text-base text-muted-foreground truncate">
              {ev.manufacturer}
            </CardDescription>
          </div>
          <div className="text-right ml-4">
            <div className="text-2xl md:text-3xl font-bold text-foreground">
              {formatPrice(ev.price)}
            </div>
            <div className="text-xs text-muted-foreground">USD</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-lg md:text-2xl font-bold text-blue-600">{ev.horsepower}</div>
            <div className="text-xs md:text-sm text-muted-foreground">HP</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="text-lg md:text-2xl font-bold text-green-600">{ev.battery_capacity}</div>
            <div className="text-xs md:text-sm text-muted-foreground">kWh</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-lg md:text-2xl font-bold text-purple-600">{ev.top_speed}</div>
            <div className="text-xs md:text-sm text-muted-foreground">km/h</div>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
            <div className="text-lg md:text-2xl font-bold text-orange-600">{ev.range}</div>
            <div className="text-xs md:text-sm text-muted-foreground">Range</div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <span className={cn("px-2 py-1 rounded-full text-xs font-medium border", getCategoryColor(ev.category))}>
            {ev.category.charAt(0).toUpperCase() + ev.category.slice(1)}
          </span>
          <span className={cn("px-2 py-1 rounded-full text-xs font-medium", getBatteryColor(ev.battery_category))}>
            {ev.battery_category.charAt(0).toUpperCase() + ev.battery_category.slice(1)} Battery
          </span>
          <span className={cn("px-2 py-1 rounded-full text-xs font-medium", getHorsepowerColor(ev.horsepower_category))}>
            {ev.horsepower_category.charAt(0).toUpperCase() + ev.horsepower_category.slice(1)} Power
          </span>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-indigo-50 rounded-lg border border-indigo-200">
            <div className="text-sm font-semibold text-muted-foreground">Performance</div>
            <div className="text-lg md:text-xl font-bold text-indigo-600">{ev.performance_score.toFixed(1)}</div>
          </div>
          <div className="text-center p-3 bg-emerald-50 rounded-lg border border-emerald-200">
            <div className="text-sm font-semibold text-muted-foreground">Value</div>
            <div className="text-lg md:text-xl font-bold text-emerald-600">{ev.value_score.toFixed(2)}</div>
          </div>
        </div>

        {/* Expandable Features */}
        <div>
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full justify-between p-3 h-auto"
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="font-semibold">Key Features</span>
            </div>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
          
          {isExpanded && (
            <div className="mt-3 p-4 bg-muted/50 rounded-lg space-y-3">
              <div className="flex flex-wrap gap-2">
                {ev.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Acceleration:</span>
                  <span className="font-medium">{ev.acceleration}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            asChild
            variant="gradient"
            className="w-full"
          >
            <a
              href={ev.manufacturer_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Visit {ev.manufacturer}
            </a>
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Compare</span>
            </Button>
            <Button 
              variant={isSaved ? "default" : "outline"}
              size="sm"
              onClick={() => setIsSaved(!isSaved)}
              className="flex items-center gap-2"
            >
              <Heart className={cn("w-4 h-4", isSaved && "fill-current")} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EVCard;