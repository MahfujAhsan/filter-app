import React from 'react';
import { categoryList, ratingList } from '../../../constants';
import CheckboxProton from '../../Common/CheckboxProton';
import FilterListToggle from '../../Common/FilterListToggle';
import SliderProton from '../../Common/SliderProton';
import "./styles.css"

const FilterPanel = ({ selectedCategory, selectToggle, selectedRating, selectRating, cuisine, changeChecked, selectedPrice, changedPrice }) => {
    return (
        <div>
            {/* Category */}
            <div className="input-group">
                <p className='label'>Category</p>
                <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectToggle}/>
            </div>
            {/* Cuisines */}
            <div className="input-group">
                <p className='label'>Cuisines</p>
                {
                    cuisine.map(cuis => <CheckboxProton key={cuis.id} changeChecked={changeChecked} cuisine={cuis}/>)
                }
            </div>

            <div className="input-group">
                <p className='label-range'>Cuisines</p>
                <SliderProton value={selectedPrice} changedPrice={changedPrice}></SliderProton>
            </div>
            {/* Price Range */}
            {/* Star Rating */}
            <div className="input-group">
                <p className='label'>Star Rating</p>
                <FilterListToggle options={ratingList} value={selectedRating} selectToggle={selectRating} />
            </div>
        </div>
    );
};

export default FilterPanel;