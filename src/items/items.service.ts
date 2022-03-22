import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { updateItemDto } from './dto/create-item.dto';
@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item')private readonly ItemModel:Model<Item>){}
    async findAll():Promise<Item[]>{
        return await this.ItemModel.find();
    }

    async findOne(id : string):Promise<Item>{
        return await this.ItemModel.findOne({_id:id});
    }

    async create(item : Item):Promise<Item>{
        const newitem = new this.ItemModel(item);
        return await newitem.save();
    }

    async delete(id:string):Promise<Item>{
        return await this.ItemModel.findByIdAndRemove(id)
    }
    async update(id:string, item:Item):Promise<Item>{
        return await this.ItemModel.findByIdAndUpdate(id ,item,{new:true})
    }
}
