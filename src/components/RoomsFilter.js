import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";
// get all unique values


const RoomsFilter = ({rooms}) => {
    
    const context = useContext(RoomContext);

    console.log(rooms);
    const getUnique = (item,value) => {
        console.log('value... ',value);
        console.log('rooms... ',rooms);

        return [...new Set(item.map(item => item[value]))]
    }
    const {
        handleChange,
        type,
        capacity,
        price,
        // minPrice,
        // maxPrice,
        // minSize,
        // maxSize,
        // breakfast,
        // pets,
    } = context;

    const minPrice = 0;
    const maxPrice = 600;
    const minSize = 0;
    const maxSize = 1000;
    const breakfast = true;
    const pets = true;

    // console.log(minPrice,maxPrice,minSize,maxSize);
    // console.log('Rooms ' + context);
    // console.log(context);

    // get unique types
  let types = getUnique(rooms,'type');

  // add all
  types = ['all',...types];

  // map to jsx
  types  = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
  })

  let people = getUnique(rooms,'capacity');
  people = people.map((item,index) => {
    return <option key={index} value={item}>{item}</option>
  })

  return (
    <>
      <section className="filter-container">
        <Title title="Search Rooms" />
        <form className="filter-form">

          {/* select type */}

          <div className="form-group">
            <label htmlFor="type">Room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
            {types}
            </select>
          </div>

          {/* end of select type */}


          {/* guests */}

          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
            {people}
            </select>
          </div>

          {/* end of guests */}

          {/* Room Price */}

            <div className="form-group">
                <label htmlFor="price">
                    Room Price ${price}
                </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
            </div>

          {/* End of Room Price */}

          {/* size */}

            <div className="form-group">
                <label htmlFor="size">Room Size</label>
                <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>

                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                </div>
            </div>

          {/* End of size */}

          {/* extras */}

                <div className="form-group">
                    <div className="single-extra">

                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>

                        <label htmlFor="breakfast">Breakfast</label>

                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>

          {/* end of extras */}

        </form>
      </section>
    </>
  );
};

export default RoomsFilter;
