  function setTimeFromAnotherDate(dayDate, timeDate) {
        const clonedDayDate = new Date(dayDate); // Creates a copy
        return new Date(clonedDayDate.setHours(timeDate.getHours(), timeDate.getMinutes(), timeDate.getSeconds(), timeDate.getMilliseconds()));
    }

    function asEvent(calendarName, event, overrideStart) {

        let classNames = ["calendar-" + calendarName];

        //if(event.summary

        if(overrideStart) {
              return {
                    start: overrideStart.toJSDate(),
                    end:  setTimeFromAnotherDate(overrideStart.toJSDate(), event.endDate.toJSDate()),
                    title: event.summary,
                    id: event.uid + overrideStart,
                    backgroundColor: "#ffffff",
                    textColor: "#000000",
                    allDay: event.startDate.isDate,
                    classNames: classNames
                  }
        } else {
                return {
                    start: event.startDate.toJSDate(),
                    end:  event.endDate.toJSDate(),
                    title: event.summary,
                    id: event.uid,
                    backgroundColor: "#ffffff",
                    textColor: "#000000",
                    allDay: event.startDate.isDate,
                    classNames: classNames
                  }
        }
    }


    function selectEventsBetween(start, end, events, calendarName) {

      let rv = [];

      for(event of events) {
        if(event.isRecurring()) {
              let expand = new ICAL.RecurExpansion({
                component: event.component,
                dtstart: event.startDate
              });

              let next = expand.next();
              while (next && next.toJSDate() <= end) {
                if (next.toJSDate() >= start) {
                  rv.push(asEvent(calendarName, event, next));
                }
                next = expand.next();
              }
          } else {
              rv.push(asEvent(calendarName, event));
          }
      }
      return rv;
    }


    function fetchAndParseIcal(icalUrl) {
      return fetch(icalUrl)
        .then(response => response.text())
        .then(icalDataText => {
          let jcalData = ICAL.parse(icalDataText);
          const icalComp = new ICAL.Component(jcalData);
          const events = icalComp.getAllSubcomponents("vevent").map(vevent => new ICAL.Event(vevent));
            return events;
        })
        .catch(error => console.error('Error fetching or parsing iCal data:', error));
    }

    function getEventsForDateRange(dateStart, dateEnd) {
      const icalUrls = [
        ['family-event','http://192.168.11.190/calendar1.ics'],
        ['family-holiday','http://192.168.11.190/calendar2.ics'],
        ['school-holiday','http://192.168.11.190/calendar3.ics']]; // hardcoded URLs

      return Promise.all(icalUrls.flatMap(icalUrl =>
          fetchAndParseIcal(icalUrl[1]).then(events => selectEventsBetween(dateStart, dateEnd, events, icalUrl[0]))
      )).then(events => events.flat())
      .catch(error => console.error('Error fetching or parsing iCal data:', error));
    }

    let ec = new EventCalendar(document.getElementById('ec'), {
    view: 'dayGridMonth',
    eventSources: [{
        events: function(fetchInfo, successCallback, failureCallback) { return getEventsForDateRange(fetchInfo.start, fetchInfo.end); }
    }],
    duration: {weeks: 2},
    firstDay: 1,
    headerToolbar: {start: '', center: 'title', end: ''},
    width: "1304px"
});