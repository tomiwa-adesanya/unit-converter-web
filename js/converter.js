class UnitConverterTools {
    /*
        Class with tools to perform unit conversion between units of the same quantities.

        Methods:
        -----------------------------------------------------------------------------------------------------------------------------------
        * initConversionFactors(): initialises a JavaScript Object of conversion factors used to perform the conversion.
        There is an Object for each physical quantity, with units as keys and numerical factors as values.
        The numerical conversion factors are relative to a Standard Conversion Unit (present in all <Physical Quantity> Object) whose own 
        factor is 1.
        
        * convert(quantity, value, from, to): converts value from base unit passed to argument `from` to a required unit passed to argument 
        `to`. To convert to specified unit, the value is first of all converted to a Standard Conversion Unit. Finally, the respective
        value in the Standard Conversion Unit is converted to the required unit.
    */

    constructor() {

        //------------------------------------------------------------------------------------------------------------------------
        this.initConversionFactors() // Conversion Factors of type Object have units of specific physical quantities as keys and conversion Factors relative to conversion standards as values
        //------------------------------------------------------------------------------------------------------------------------

        this.quantities = Object.keys(this.factors) // Array of all Physical quantities

        this.quantityUnits = {}
        for (let quantity of this.quantities){
            this.quantityUnits[quantity] = Object.keys(this.factors[quantity])
        }

    }

    initConversionFactors(){

        this.length_in_meters = { // With respect to meter as Standard Conversion Unit
            "meter" : 1,
            "kilometer" : 0.001, 
            "centimeter" : 100,
            "millimeter" : 1000, 
            "micrometer" : 1e+6,
            "nanometer" : 1e+9, 
            "mile" : 0.000621371,
            "yard" : 1.09361,
            "foot" : 3.28084,
            "inch" : 39.3701,
            "nautical_mile" : 0.000539957,
        }

        this.area_in_sqm = { // Conversion Factors with respect to Square Meter as Standard Conversion Unit
            "square_meter" : 1,
            "square_kilometer" : 1e-6,
            "square_mile" : 3.861e-7, 
            "square_yard" : 1.19599,
            "square_foot" : 10.7639,
            "square_inch" : 1550,
            "hectare" : 1e-4,
            "acre" : 0.000247105
        }

        this.volume_in_liter = { // Conversion Factors with respect to Liter as Standard Conversion Unit
            "liter" : 1,
            "milliliter" : 1000,
            "us_liquid_gallon" : 0.264172,
            "us_liquid_quart" : 1.05569,
            "us_liquid_pint" : 2.11338,
            "us_legal_cup" : 4.16667,
            "fluid_ounce" : 33.814,
            "us_tablespoon" : 67.628,
            "us_teaspoon" : 202.884, 
            "cubic_meter" : 0.001,
            "imperial_gallon" : 0.219969,
            "imperial_quart" : 0.879877,
            "imperial_pint" : 1.75975,
            "imperial_cup" : 3.51951,
            "imperial_tablespoon" : 56.3121,
            "imperial_teaspoon" : 168.936,
            "cubic_foot" : 0.0353147,
            "cubic_inch" : 61.0237,
        }

        this.mass_in_gram = { // Conversion Factors with respect to Gram as Standard Conversion Unit
            "gram" : 1,
            "tonne" : 1e-6,
            "kilogram" : 0.001,
            "milligram" : 1000,
            "microgram" : 1e+6,
            "imperial_ton" : 9.8421e-7,
            "us_ton" : 1.1023e-6,
            "stone" : 0.000157473,
            "pound" : 0.00220462,
            "ounce" : 0.035274,
        }

        this.time_in_seconds = { // Conversion Factors with respect to Second as Standard Conversion Unit
            "second" : 1,
            "nanosecond" : 1e+9, 
            "microsecond" : 1e+6,
            "millisecond" : 1000,
            "minute" : 0.0166667,
            "hour" : 0.000277778,
            "day" : 1.1574e-5,
            "week" : 1.6534e-6,
            "month" : 3.8052e-7,
            "calendar_year" : 3.171e-8,
            "decade" : 3.171e-9,
            "century" : 3.171e-10
        }

        this.energy_in_joule = { // Conversion Factors with respect to Joules as Standard Conversion Unit
            "joule" : 1,
            "kilejoule" : 0.001,
            "gram_calorie" : 0.239006,
            "kilo_calorie" : 0.000239006,
            "watt_hour" : 0.000277778,
            "kilowatt_hour" : 2.7778e-7,
            "electronvolt" : 6.242e+18,
            "british_thermal_unit" : 0.000947817,
            "us_therm" : 9.4804e-9,
            "foot_pound" : 0.737562,
        }

        this.frequency_in_hertz = { // Conversion Factors with respect to Hertz as Standard Conversion Unit
            "hertz" : 1,
            "kilohertz" : 0.001, 
            "megahertz" : 1e-6,
            "gigahertz" : 1e-9,
        }

        this.pressure_in_pascal = { // Conversion Factors with respect to Pascal as Standard Conversion Unit
            "pascal" : 1, 
            "kilopascal" : 0.001,
            "millimeter_of_mercury" : 0.007502,
            "bar" : 1e-5,
            "pound_per_square_inch" : 0.000145038,
            "standard_atmosphere" : 9.8692e-6, 
            "torr" : 0.00750062,
        }

        this.speed_in_knot = { // Conversion Factors with respect to Knot as Standard Conversion Unit
            "knot" : 1,
            "mach" : 0.001512,
            "miles_per_hour" : 1.15078,
            "foot_per_second" : 1.68781,
            "centimeter_per_second" : 51.44,
            "meter_per_second" : 0.514444,
            "kilometer_per_hour" : 1.852,
        }

        this.plane_angle_in_degree = { // Conversion Factors with respect to Degree as Standard Conversion Unit
            "degree" : 1,
            "radian" : 0.0174533,
            "gradian" : 1.11111,
            "milliradian" : 17.4533,
            "minute_of_arc" : 60,
            "second_of_arc" : 3600,
        }

        this.fuel_economy_in_mipga = { // Conversion Factors with respect to Miles Per Gallon(mipga) as Standard Conversion Unit
            "miles_per_gallon" : 1,
            "miles_per_gallon_(imperial)" : 1.20095,
            "kilometer_per_liter" : 0.425144,
            "liter_per_100_kilometers" : 235.215
        }

        this.data_transfer_rate_in_bitps = { // Conversion Factors with respect to bits per seconds (bitps) as Standard Conversion Unit
            "bit_per_second" : 1,
            "kilobit_per_second" : 0.001,
            "kilobyte_per_second" : 0.000125,
            "kibibit_per_second" : 0.000976563,
            "megabit_per_second" : 1e-6, 
            "megabyte_per_second" : 1.25e-7,
            "mebibit_per_second" : 9.5367e-7, 
            "gigabit_per_second" : 1e-9, 
            "gigabyte_per_second" : 1.25e-10, 
            "gibibit_per_second" : 9.3132e-10, 
            "terabit_per_second" : 1e-12, 
            "terabyte_per_second" : 1.25e-13, 
            "tebibit_per_second" : 9.0949e-13
        }

        this.digital_storage_in_bit = { // Conversion Factors with respect to Bits as Standard Conversion Unit
            "bit" : 1,
            "kilobit" : 0.001,
            "kibibit" : 0.000976563,
            "megabit" : 1e-6,
            "mebibit" : 9.5367e-7,
            "gigabit" : 1e-9,
            "gibibit" : 9.3132e-10,
            "terabit" : 1e-12,
            "tebibit" : 9.0949e-13,
            "petabit" : 1e-15,
            "pebibit" : 8.8818e-16,
            "byte" : 0.125,
            "kilobyte" : 0.000125,
            "kibibyte" : 0.00012207,
            "megabyte" : 1.25e-7,
            "mebibyte" : 1.1921e-7,
            "gigabyte" : 1.25e-10,
            "gibibyte" : 1.1642e-10,
            "terabyte" : 1.25e-13,
            "tebibyte" : 1.1369e-13,
            "petabyte" : 1.25e-16,
            "pebibyte" : 1.1102e-16
        }

        this.temperature_in_void = {
            "celsius" : undefined, 
            "fahrenheit" : undefined,
            "kelvin" : undefined,
        }

        //-------------------------------------------------------------
        this.factors = {
            "length" : this.length_in_meters,
            "area" : this.area_in_sqm,
            "volume" : this.volume_in_liter,
            "mass" : this.mass_in_gram,
            "time" : this.time_in_seconds,
            "energy" : this.energy_in_joule,
            "frequency" : this.frequency_in_hertz,
            "pressure" : this.pressure_in_pascal,
            "speed" : this.speed_in_knot, 
            "plane_angle" : this.plane_angle_in_degree,
            "fuel_economy" : this.fuel_economy_in_mipga,
            "data_transfer_rate" : this.data_transfer_rate_in_bitps,
            "digital_storage" : this.digital_storage_in_bit,
            "temperature" : this.temperature_in_void
        }

    }

    convert(quantity, value, from, to){
        if (quantity == "temperature"){
            return this.convert_temperature(value, from, to)
        }
        let conversionFactors = this.factors[quantity]
        let toConversionStandard = (1/conversionFactors[from]) * value 
        return toConversionStandard * conversionFactors[to]
    }

    convert_temperature(value, from, to){
        if ((from == "celsius") && (to == "fahrenheit")){
            return ((value * 1.8) + 32)
        } else if ((from == "fahrenheit") && (to == "celsius")){
            return ((value - 32) * 1/1.8)
        } else if (((to == "kelvin") || (from == "kelvin")) && ((to == "celsius") || (from == "celsius"))){
            let factor = (to == "kelvin") ? 273.15 : -273.15
            return (value + factor)
        } else if ((from == "kelvin") && (to == "fahrenheit")) {
            return this.convert_temperature(
                this.convert_temperature(value, "kelvin", "celsius"),
                "celsius", "fahrenheit"
            )
        }
        else if ((from == "fahrenheit") && (to == "kelvin")) { // to Kelvin
            return this.convert_temperature(
                this.convert_temperature(value, "fahrenheit", "celsius"),
                "celsius", "kelvin"
            )
        }
    }

}

let converter = new UnitConverterTools()