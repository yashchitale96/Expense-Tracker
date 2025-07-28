// Utility functions for formatting data

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date));
}

export const getCategoryIcon = (text) => {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('food') || lowerText.includes('restaurant') || lowerText.includes('dinner') || lowerText.includes('lunch')) {
    return 'fas fa-utensils';
  }
  if (lowerText.includes('transport') || lowerText.includes('gas') || lowerText.includes('uber') || lowerText.includes('taxi')) {
    return 'fas fa-car';
  }
  if (lowerText.includes('shopping') || lowerText.includes('clothes') || lowerText.includes('amazon')) {
    return 'fas fa-shopping-cart';
  }
  if (lowerText.includes('entertainment') || lowerText.includes('movie') || lowerText.includes('game')) {
    return 'fas fa-gamepad';
  }
  if (lowerText.includes('salary') || lowerText.includes('income') || lowerText.includes('freelance')) {
    return 'fas fa-briefcase';
  }
  if (lowerText.includes('investment') || lowerText.includes('dividend') || lowerText.includes('stock')) {
    return 'fas fa-chart-line';
  }
  if (lowerText.includes('home') || lowerText.includes('rent') || lowerText.includes('utilities')) {
    return 'fas fa-home';
  }
  if (lowerText.includes('health') || lowerText.includes('doctor') || lowerText.includes('medicine')) {
    return 'fas fa-heartbeat';
  }
  
  // Default icons
  return 'fas fa-receipt';
}

export const getTransactionColor = (amount) => {
  return amount > 0 ? 'var(--success-color)' : 'var(--danger-color)';
}
