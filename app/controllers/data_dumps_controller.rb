class DataDumpsController < ActionController::Base
  def show
    ships = Ship.with_company.in_scope.order(:thetis_average_co2_per_pax).all
    routes_original_direction = Route.human_ordered.select{ |r| r.ships.with_company.count > 0}
    routes_reverse_direction = routes_original_direction.map(&:opposite_direction)
    all_routes = routes_original_direction + routes_reverse_direction
    companies = Company.in_scope.human_ordered.all
    render json: {
      routes: Blueprints::Route.render_as_hash(all_routes),
      ships: Blueprints::Ship.render_as_hash(ships),
      companies: Blueprints::Company.render_as_hash(companies),
    }
  end
end
