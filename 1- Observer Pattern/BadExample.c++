

/*
bad implementation because we have no way to add or remove other display elements without making changes to the program
*/

#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

class CurrentConditionsDisplay
{
public:
    void update(float temp, float humidity, float pressure)
    {
        cout << "Current conditions: " << temp << "F degrees and " << humidity << "% humidity and " << pressure << " pressure" << endl;
    }
};

class StatisticsDisplay
{
public:
    void update(float temp, float humidity, float pressure)
    {
        cout << "Statistics: " << temp << "F degrees, " << humidity << "% humidity, " << pressure << " pressure" << endl;
    }
};

class ForecastDisplay
{
public:
    void update(float temp, float humidity, float pressure)
    {
        cout << "Forecast: " << temp << "F degrees, " << humidity << "% humidity, " << pressure << " pressure" << endl;
    }
};

class WeatherData
{
    CurrentConditionsDisplay currentConditionsDisplay;
    StatisticsDisplay statisticsDisplay;
    ForecastDisplay forecastDisplay;
    // Assuming these functions are implemented somewhere to fetch real data
    float getTemperature()
    {
        return 72.5; // placeholder
    }
    float getHumidity()
    {
        return 65.5; // placeholder
    }
    float getPressure()
    {
        return 30.4; // placeholder
    }

public:
    WeatherData(){};

    void measurementsChanged()
    {
        float hum = getHumidity();
        float temp = getTemperature();
        float press = getPressure();

        currentConditionsDisplay.update(temp, hum, press);
        statisticsDisplay.update(temp, hum, press);
        forecastDisplay.update(temp, hum, press);

    } // every time the measurement is updated this funciton will be called
};
