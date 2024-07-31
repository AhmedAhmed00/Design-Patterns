

// my resource to learn ==> Head First Book

// Don’t miss out when something interesting happens!
// the observer الراصد و المراقب

/*
the Observer Pattern defines a one-to-many relationship between a set of objects.
When the state of one object changes, all of its dependents are notified.
*/

// object that holds state = subject object or observable ==> ex : publisher
// dependent objects = observers ==> ex : subscribers
// publishers + subscribers = observer Pattern

#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

class Observer
{
public:
    virtual void update(float temp, float hum, float press) = 0;
};
class StatisticsDisplay : public Observer
{
public:
    void update(float temp, float humidity, float pressure)
    {
        cout << "Statistics: " << temp << "F degrees, " << humidity << "% humidity, " << pressure << " pressure" << endl;
    }
};

class Observable
{
public:
    virtual void registerObserver(Observer *o) = 0;
    virtual void removeObserver(Observer *o) = 0;
    virtual void notifyObservers() = 0;
};
class WeatherData : public Observable
{
private:
    vector<Observer *> observers;
    float temp;
    float hum;
    float press;

public:
    void registerObserver(Observer *o)
    {
        observers.push_back(o);
    }
    void removeObserver(Observer *o)
    {
        auto it = find(observers.begin(), observers.end(), o);
        if (it != observers.end())
        {
            observers.erase(it);
            cout << "Observer Delated Successfully";
        }
    };
    void notifyObservers()
    {
        for (Observer *observer : observers)
        {
            observer->update(temp, hum, press);
        }
    };
    void measurementsChanged()
    {
        notifyObservers();
    }
    void setMeasurements(float temp, float hum, float press)
    {
        this->temp = temp;
        this->hum = hum;
        this->press = press;
        measurementsChanged();
    }
};

int main()
{

    StatisticsDisplay statisticsDisplayObserver;
    WeatherData weatherData;
    weatherData.registerObserver(&statisticsDisplayObserver);
    weatherData.setMeasurements(80, 65, 30.4f);
    weatherData.removeObserver(&statisticsDisplayObserver);
}