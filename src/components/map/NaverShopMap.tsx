"use client";

export type StoreMapPinStatus = "inactive" | "selected";

export type StoreMapLocation = {
  id: string;
  latitude: number;
  longitude: number;
  name?: string;
  status?: Exclude<StoreMapPinStatus, "selected">;
  address?: string;
  description?: string;
  category?: string;
  imageUrl?: string;
  markerIconUrl?: string;
  markerLabelVariant?: "default" | "dark";
};


export default function NaverShopMap() {

}