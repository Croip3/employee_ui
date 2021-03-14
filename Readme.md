# Mitarbeiter Web App

This is an early kind of design concept which is not finisched for an employee dashboard.

This project was created in the Relaxdays Code Challenge Vol. 1. See https://sites.google.com/relaxdays.de/hackathon-relaxdays/startseite for more information. My participant ID in the challenge was: CC-VOL1-9, CC-Vol1-22

## How to run this project

You can get a running version of this code by using:

```bash
git clone https://github.com/LukasKaufmannRelaxdays/hackathon-example-submission.git
cd employee_ui
docker build -t employeeui .
docker run -v $(pwd):/app -p 8080:80 -it employeeui
```

If you now access http://127.0.0.1:8080/ you should see the thing you want to review.
