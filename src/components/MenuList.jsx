import { useState } from "react";
import { foods } from "../data";
import { useEffect } from "react";
import { MyModal } from "./MyModal";

export function MenuList({ selectedCateg }) {
	const [menu, setMenu] = useState(foods);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedFood, setSelectedFood] = useState(null);

	useEffect(() => {
		setMenu(() =>
			selectedCateg == "all"
				? foods
				: foods.filter(({ category }) => category == selectedCateg),
		);
	});

	const toggle = ({ title, img }) => {
		setIsOpen(!isOpen);
		setSelectedFood({ title, img });
	};

	return (
		<div className="flex flex-wrap gap-4">
			{menu.map(({ id, title, price, img, desc }) => (
				<div
					key={id}
					className="flex flex-col brp500:flex-row gap-4 basis-full brp900:basis-[calc(50%-20px)] border border-blue-900 p-2 rounded-2xl"
				>
					<div className="flex-1">
						<img
							className="w-full h-48 object-cover rounded-2xl"
							src={"images/" + img}
							alt={title}
							onClick={() => toggle({ title, img })}
						/>
					</div>
					<div className="flex-1">
						<div className="flex justify-between border-b border-amber-500 text-amber-300 p-2">
							<span className="capitalize">{title}</span>
							<span>€{price}</span>
						</div>
						<div>{desc}</div>
					</div>
				</div>
			))}
			{isOpen && (
				<MyModal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					selectedFood={selectedFood}
				/>
			)}
		</div>
	);
}
