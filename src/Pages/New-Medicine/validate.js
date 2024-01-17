export const Validation = (formData) => {
    const newErrors = {};
    const { name, price, quantity, description, company } = formData;

    if (!name.trim() || name.length < 2) {
        newErrors.name = 'Name is required*';
    }
    if (!Number.isInteger(+price) || !price.trim()) {
        newErrors.price = 'Price is required price must be a number*';
    }
    if (!description.trim()) {
        newErrors.description = 'description is required*';
    }

    if (!Number.isInteger(+quantity) || !quantity.trim()) {
        newErrors.quantity = 'quantity is required quantity must be a number*';
    }

    if (!company.trim()) {
        newErrors.company = 'category is required*';
    }

    return newErrors;
};
