import { averageIntensity, marginalIntensity } from "@tgwf/co2";

// Test the data object for average intensity
const averageData: { [key: string]: number } = averageIntensity.data;

// Test the value for a country for average intensity
const ausAverage: number = averageIntensity.data.AUS;

// Test the type for average intensity
const averageType: string = averageIntensity.type;

// Test the data object for marginal intensity
const marginalData: { [key: string]: number } = marginalIntensity.data;

// Test the value for a country for marginal intensity
const ausMarginal: number = marginalIntensity.data.AUS;

// Test the type for marginal intensity
const marginalType: string = marginalIntensity.type;
