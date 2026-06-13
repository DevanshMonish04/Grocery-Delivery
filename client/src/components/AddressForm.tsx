import { XIcon } from "lucide-react";

const AddressForm = ({
  resetForm,
  handleSubmit,
  form,
  setForm,
  editingId,
}: any) => {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-50">
        {/* Form Container */}
        <div
          onClick={resetForm}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 w-full max-w-lg animate-fade-in"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-app-green">
                {editingId !== null
                  ? "Edit Address"
                  : "Add New Address"}
              </h2>

              <button
                type="button"
                onClick={resetForm}
                className="p-2 hover:bg-app-cream rounded-lg transition-colors"
              >
                <XIcon className="size-5" />
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Label */}
              <div>
                <label className="block text-sm font-medium text-app-green mb-1.5">
                  Label
                </label>

                <input
                  type="text"
                  placeholder="Home, Work, etc."
                  required
                  value={form.label}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      label: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                />
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm font-medium text-app-green mb-1.5">
                  Street Address
                </label>

                <input
                  type="text"
                  placeholder="Enter street address"
                  required
                  value={form.address}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                />
              </div>

              {/* City + State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-app-green mb-1.5">
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="Enter city"
                    required
                    value={form.city}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        city: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-app-green mb-1.5">
                    State
                  </label>

                  <input
                    type="text"
                    placeholder="Enter state"
                    required
                    value={form.state}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        state: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                  />
                </div>
              </div>

              {/* Zip Code + Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Zip Code */}
                <div>
                  <label className="block text-sm font-medium text-app-green mb-1.5">
                    Zip Code
                  </label>

                  <input
                    type="text"
                    placeholder="Enter zip code"
                    required
                    value={form.zipCode}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        zipCode: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-app-green mb-1.5">
                    Country
                  </label>

                  <input
                    type="text"
                    placeholder="Enter country"
                    required
                    value={form.country}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        country: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                  />
                </div>
              </div>

              {/* Default Address Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.isDefault}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      isDefault:
                        e.target.checked,
                    })
                  }
                  className="size-4 accent-app-green cursor-pointer"
                />

                <span className="text-sm text-app-text">
                  Set as default address
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 py-3 bg-app-green text-white font-medium rounded-xl hover:bg-app-green-light transition-colors"
            >
              {editingId !== null
                ? "Update Address"
                : "Save Address"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddressForm;