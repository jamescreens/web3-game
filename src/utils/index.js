export function checkDateAndAddDays(
    date,
    daysToAdd,
    minDays,
    maxDays
  ) {
    const currentDate = new Date();
    const targetDate = new Date(date);
    targetDate.setDate(targetDate.getDate() + daysToAdd);
    const diffInDays = Math.floor(
      (targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    );
  
    if (targetDate.getTime() === currentDate.getTime()) {
      return true;
    } else if (targetDate.getTime() < currentDate.getTime()) {
      return false;
    } else if (diffInDays < minDays || diffInDays > maxDays) {
      return false;
    } else {
      return true;
    }
  }
  
  export const getCurrentTimestamp = () => {
    return Math.round(Date.now() / 1000);
  };
  