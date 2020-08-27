let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}


function deleteFromDriverByKey(driver, key, value) {
    const newDriver = {...driver};
    newDriver[key] = value;
    delete newDriver.key;
    return newDriver;
}


function destructivelyDeleteFromDriverByKey(driver, key, value) {
    driver[key] = value;
    delete driver.key;
    return driver;
}